import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-list">
      <div class="image-list-header">
        <h2>Image4</h2>
      </div>
      <div class="image-items">
        <div *ngFor="let image of images; let i = index"
             class="image-item"
             [class.selected]="i === 0"
             (click)="onImageClick(image)">
          <img [src]="image.thumbnail" [alt]="image.name">
          <div class="image-info">
            <div class="image-icon">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm2 0v10h8V3H4zm2 2h4v4H6V5z"/>
              </svg>
            </div>
            <div class="image-details">
              <div class="image-name">{{ image.name }}</div>
              <div class="image-time" *ngIf="image.duration > 0">
                {{ formatTime(image.duration) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .image-list {
      width: 300px;
      background: #1e1e1e;
      border-right: 1px solid #3a3a3a;
      display: flex;
      flex-direction: column;
    }

    .image-list-header {
      padding: 16px;
      border-bottom: 1px solid #3a3a3a;
    }

    .image-list-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }

    .image-items {
      flex: 1;
      overflow-y: auto;
      padding: 8px;
    }

    .image-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px;
      margin-bottom: 12px;
      cursor: pointer;
      border-radius: 6px;
      background: #252525;
      border: 2px solid transparent;
      transition: all 0.2s ease;
    }

    .image-item:hover {
      background: #2a2a2a;
    }

    .image-item.selected {
      border-color: #007aff;
      background: #2a2a2a;
    }

    .image-item img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-radius: 4px;
      background: #1a1a1a;
    }

    .image-info {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 0 4px;
    }

    .image-icon {
      color: #888;
      display: flex;
      align-items: center;
    }

    .image-details {
      flex: 1;
      min-width: 0;
    }

    .image-name {
      font-size: 13px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .image-time {
      font-size: 11px;
      color: #888;
      margin-top: 2px;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #1e1e1e;
    }

    ::-webkit-scrollbar-thumb {
      background: #444;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `]
})
export class ImageListComponent {
  @Input() images: any[] = [];
  @Output() imageSelect = new EventEmitter<any>();

  onImageClick(image: any) {
    this.imageSelect.emit(image);
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}.${Math.floor((seconds % 1) * 10)} / ${mins}:${secs.toString().padStart(2, '0')}.${Math.floor((seconds % 1) * 10)}`;
  }
}
