import { Component } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-image-dropzone',
  templateUrl: './image-dropzone.component.html',
  styleUrls: ['./image-dropzone.component.css']
})
export class ImageDropzoneComponent {
  isDragging = false;
  uploadProgress: number | null = null;
  errorMsg: string | null = null;

  constructor(private uploadService: ImageUploadService) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!file.type.startsWith('image/')) {
        this.errorMsg = 'Only image files are allowed!';
        return;
      }
      this.uploadImage(file);
    }
  }

  uploadImage(file: File) {
    this.errorMsg = null;
    this.uploadProgress = 0;
    this.uploadService.uploadImage(file).subscribe({
      next: (event: any) => {
        if (event.type === 1 && event.total) { // HttpEventType.UploadProgress
          this.uploadProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === 4) { // HttpEventType.Response
          this.uploadProgress = 100;
        }
      },
      error: (err) => {
        this.uploadProgress = null;
        this.errorMsg = 'Upload failed!';
      }
    });
  }
}
