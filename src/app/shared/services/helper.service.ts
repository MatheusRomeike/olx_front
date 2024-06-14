import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  base64ToFile(base64String: string, filename: string): File {
    const byteString = atob(base64String.split(',')[1]);
    
    const mimeString = base64String.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
      }
      
      const blob = new Blob([ab], { type: mimeString });

    return new File([blob], filename, {
      type: mimeString,
      lastModified: 1,
    });
  }
}
