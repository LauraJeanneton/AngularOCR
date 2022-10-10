import { Component, OnInit, VERSION } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapsService } from './services/face-snaps.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faceSnaps!: FaceSnap[];
}

