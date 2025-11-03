import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toolbar">
      <div class="toolbar-left">
        <button class="toolbar-btn icon-btn">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zM2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8zm0 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <span class="app-title">Write</span>
      </div>
      <div class="toolbar-right">
        <button class="toolbar-btn">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="12" height="12" rx="1"/>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: #1e1e1e;
      border-bottom: 1px solid #3a3a3a;
    }

    .toolbar-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .toolbar-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toolbar-btn {
      background: transparent;
      border: none;
      color: #fff;
      padding: 6px 10px;
      cursor: pointer;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
    }

    .toolbar-btn:hover {
      background: #2a2a2a;
    }

    .icon-btn {
      padding: 6px 8px;
    }

    .app-title {
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
  `]
})
export class ToolbarComponent {}
