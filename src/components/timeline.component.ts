import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline">
      <div class="timeline-controls">
        <button class="control-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 2L5 8l6 6V2z"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 2L5 8l6 6V2z"/>
          </svg>
        </button>
        <button class="control-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 2l6 6-6 6V2z"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 2l6 6-6 6V2z"/>
          </svg>
        </button>
        <button class="control-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 3h2v10H2V3zm3 2l7 5-7 5V5z"/>
          </svg>
        </button>
        <div class="time-display">{{ formatTime(currentTime) }} / {{ formatTime(24.0) }}</div>
        <button class="record-btn">
          <div class="record-dot"></div>
          Record
        </button>
        <button class="play-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 2l10 6-10 6V2z"/>
          </svg>
        </button>
        <div class="speed">1x</div>
        <button class="control-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 0h5v5H9V9z"/>
          </svg>
        </button>
        <button class="control-btn">Split</button>
        <div class="zoom-controls">
          <button class="control-btn">−</button>
          <span class="zoom-level">73%</span>
          <button class="control-btn">+</button>
          <button class="control-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2l2 4 4 .5-3 3 .5 4-3.5-2-3.5 2 .5-4-3-3 4-.5z"/>
            </svg>
          </button>
          <button class="control-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2h12v3H2V2zm0 5h12v3H2V7zm0 5h12v2H2v-2z"/>
            </svg>
          </button>
          <button class="control-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 0h5v5H9V9z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="timeline-ruler">
        <div class="time-markers">
          <div class="time-marker" *ngFor="let marker of timeMarkers">{{ marker }}</div>
        </div>
      </div>
      <div class="timeline-track">
        <button class="add-track">+</button>
        <div class="track-content">
          <div class="playhead" [style.left.px]="playheadPosition"></div>
          <div class="clip" *ngFor="let clip of timelineClips; let i = index"
               [style.left.px]="clip.position"
               [style.width.px]="clip.width">
            <div class="clip-frames">
              <img *ngFor="let frame of clip.frames" [src]="frame" [alt]="'Frame ' + i">
            </div>
            <div class="clip-number">{{ i + 1 }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline {
      background: #252525;
      border-top: 1px solid #3a3a3a;
      display: flex;
      flex-direction: column;
      height: 200px;
    }

    .timeline-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: #1e1e1e;
      border-bottom: 1px solid #3a3a3a;
    }

    .control-btn {
      background: transparent;
      border: none;
      color: #fff;
      padding: 6px 10px;
      cursor: pointer;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 2px;
      font-size: 12px;
    }

    .control-btn:hover {
      background: #333;
    }

    .time-display {
      font-size: 12px;
      color: #aaa;
      min-width: 100px;
    }

    .record-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: transparent;
      border: 1px solid #444;
      color: #fff;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }

    .record-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ff3b30;
    }

    .play-btn {
      background: transparent;
      border: 1px solid #444;
      color: #fff;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .speed {
      font-size: 12px;
      color: #aaa;
    }

    .zoom-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
    }

    .zoom-level {
      font-size: 12px;
      color: #aaa;
      min-width: 35px;
      text-align: center;
    }

    .timeline-ruler {
      background: #2a2a2a;
      padding: 4px 60px 4px 60px;
      border-bottom: 1px solid #3a3a3a;
    }

    .time-markers {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #888;
    }

    .timeline-track {
      display: flex;
      flex: 1;
      background: #1e1e1e;
      position: relative;
    }

    .add-track {
      background: transparent;
      border: none;
      color: #fff;
      width: 40px;
      cursor: pointer;
      border-right: 1px solid #3a3a3a;
      font-size: 18px;
    }

    .track-content {
      flex: 1;
      position: relative;
      padding: 10px 20px;
    }

    .playhead {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #007aff;
      z-index: 10;
    }

    .clip {
      position: absolute;
      top: 10px;
      bottom: 10px;
      background: #3a3a3a;
      border-radius: 4px;
      overflow: hidden;
      border: 2px solid #555;
    }

    .clip:first-of-type {
      border-color: #007aff;
    }

    .clip-frames {
      display: flex;
      height: 100%;
    }

    .clip-frames img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }

    .clip-number {
      position: absolute;
      top: 4px;
      right: 6px;
      background: rgba(0, 0, 0, 0.7);
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 11px;
      font-weight: 500;
    }
  `]
})
export class TimelineComponent {
  @Input() images: any[] = [];
  @Input() currentTime: number = 0;

  playheadPosition = 90;

  timeMarkers = ['0:00', '0:02', '0:04', '0:06', '0:08', '0:10', '0:12', '0:14', '0:16'];

  timelineClips = [
    {
      position: 90,
      width: 420,
      frames: [
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=150'
      ]
    },
    {
      position: 520,
      width: 140,
      frames: [
        'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=150'
      ]
    },
    {
      position: 670,
      width: 140,
      frames: [
        'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=150'
      ]
    },
    {
      position: 820,
      width: 350,
      frames: [
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150'
      ]
    }
  ];

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}.${Math.floor((seconds % 1) * 10)}`;
  }
}
