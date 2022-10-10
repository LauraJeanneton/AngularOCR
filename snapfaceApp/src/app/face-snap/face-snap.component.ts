import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) {}

  @Input() faceSnap!: FaceSnap;
  isSnapped: boolean = false;
  buttonText: string = "J'aime";

  ngOnInit(): void {
    this.isSnapped = false;
    this.buttonText = "J'aime";
  }
  onSnap() {
    if (this.isSnapped == false) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.isSnapped = true;
      this.buttonText = "Je n'aime plus";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.isSnapped = false;
      this.buttonText = "J'aime";
    }
  }
}
