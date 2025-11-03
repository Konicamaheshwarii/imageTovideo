import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canvas-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="canvas-preview">
      <div class="canvas-container">
        <div class="canvas-content">
          <img [src]="selectedImage?.thumbnail" [alt]="selectedImage?.name">
        </div>
      </div>
      <div class="canvas-controls">
        <button class="control-tab active">Layout</button>
        <button class="control-tab">Background</button>
        <button class="control-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="10" cy="10" r="8"/>
          </svg>
        </button>
        <button class="control-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z"/>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .canvas-preview {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: #2a2a2a;
      overflow: hidden;
    }

    .canvas-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
      overflow: auto;
    }

    .canvas-content {
      max-width: 90%;
      max-height: 90%;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }

    .canvas-content img {
      display: block;
      max-width: 100%;
      max-height: 70vh;
      width: auto;
      height: auto;
    }

    .canvas-controls {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 12px 16px;
      background: #1e1e1e;
      border-top: 1px solid #3a3a3a;
    }

    .control-tab {
      background: transparent;
      border: none;
      color: #888;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 6px;
      font-size: 13px;
      transition: all 0.2s ease;
    }

    .control-tab:hover {
      background: #2a2a2a;
      color: #fff;
    }

    .control-tab.active {
      background: #3a3a3a;
      color: #fff;
    }

    .control-icon {
      background: transparent;
      border: none;
      color: #888;
      padding: 8px;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      margin-left: 8px;
    }

    .control-icon:hover {
      background: #2a2a2a;
      color: #fff;
    }
  `]
})
export class CanvasPreviewComponent {
  @Input() selectedImage: any;
}
