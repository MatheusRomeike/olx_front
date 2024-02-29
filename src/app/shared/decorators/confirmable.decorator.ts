import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppInjector } from 'src/app/app-injector';
import { ConfirmationDialogComponent } from '../component/confirmation-dialog/confirmation-dialog.component';

export function Confirmable(
  message: string = 'Você tem certeza que deseja executar essa operação?',
  showWhen: Function = () => true
): MethodDecorator {
  return function (target: Function, key: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const showDialog = showWhen(this);

      if (showDialog) {
        const modalService = AppInjector.get(NgbModal);

        const modalRef = modalService.open(ConfirmationDialogComponent, {
          backdrop: 'static',
          size: 'md',
          keyboard: true,
        });
        modalRef.componentInstance.modalRef = modalRef;
        modalRef.componentInstance.modalMessage = message;

        modalRef.componentInstance.onConfirmed.subscribe(async () => {
          modalRef.componentInstance.loading = true;
          const result = await originalMethod.apply(this, args);
          modalRef.componentInstance.loading = false;
          modalRef.close();
          return result;
        });
      } else {
        const result = await originalMethod.apply(this, args);
        return result;
      }
    };

    return descriptor;
  } as any;
}
