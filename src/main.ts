import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './components/image-list.component';
import { CanvasPreviewComponent } from './components/canvas-preview.component';
import { TimelineComponent } from './components/timeline.component';
import { ToolbarComponent } from './components/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ImageListComponent, CanvasPreviewComponent, TimelineComponent, ToolbarComponent],
  template: `
    <div class="editor">
      <app-toolbar></app-toolbar>
      <div class="editor-content">
        <app-image-list [images]="images" (imageSelect)="selectImage($event)"></app-image-list>
        <div class="main-area">
          <app-canvas-preview [selectedImage]="selectedImage"></app-canvas-preview>
          <app-timeline [images]="images" [currentTime]="currentTime"></app-timeline>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .editor {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: #1a1a1a;
      color: #fff;
    }

    .editor-content {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    .main-area {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
    }
  `]
})
export class App {
  images = [
    { id: 1, name: 'Image1.png', thumbnail: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=200', duration: 6.0 },
    { id: 2, name: 'Image2.png', thumbnail: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=200', duration: 0 },
    { id: 3, name: 'Image3.png', thumbnail: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=200', duration: 0 },
    { id: 4, name: 'Image4.png', thumbnail: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=200', duration: 0 }
  ];

  selectedImage = this.images[0];
  currentTime = 0;

  selectImage(image: any) {
    this.selectedImage = image;
  }
}

bootstrapApplication(App);
