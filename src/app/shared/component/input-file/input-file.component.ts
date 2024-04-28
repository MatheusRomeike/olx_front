import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: '[input-file]',
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFileComponent {
  constructor(
    private toastrService: ToastrService,
    private modalService: NgbModal
  ) {}

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('imageModal') imageModal!: ElementRef;
  @Input() maxFiles = 1;
  @Input() files = [];
  @Input() label;
  @Input() required;
  @Input() id;
  currentFile: File | null = null;
  inputSemConfirmar = 0;
  accept = 'image/*';

  addFiles(files: File[]) {
    const totalFiles = this.files.length + files.length;
    if (totalFiles <= this.maxFiles) {
      if (this.accept === 'image/*') this.inputSemConfirmar += files.length;
      this.files = this.files.concat(files);
    } else {
      files = files.slice(0, this.maxFiles - this.files.length);
      if (this.accept === 'image/*') this.inputSemConfirmar += files.length;
      this.files = this.files.concat(
        files.slice(0, this.maxFiles - this.files.length)
      );
      this.toastrService.warning(
        `Limite de ${this.maxFiles} fotos atingido, as demais foram ignoradas.`
      );
    }
    this.fileInput.nativeElement.value = '';
  }

  onFileSelected(event: any) {
    const selectedFiles = Array.from(event.target.files || []) as File[];
    this.addFiles(selectedFiles);
  }

  removeFile(file: File) {
    console.log('removeFile', file.name);
    this.files = this.files.filter((f) => f !== file);
    this.fileInput.nativeElement.value = '';
    if (this.inputSemConfirmar > 0) {
      this.inputSemConfirmar -= 1;
    }
  }

  getPreviewUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const droppedFiles = Array.from(event.dataTransfer?.files || []);
    this.addFiles(droppedFiles);
  }

  confirmarInput() {
    if (this.accept === 'image/*') this.inputSemConfirmar -= 1;
  }

  openImageModal(file: any) {
    if (this.accept !== 'image/*') return;
    this.currentFile = file;
    this.modalService.open(this.imageModal, { size: 'lg' });
  }
}
