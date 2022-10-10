import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  imageSrc =
    'assets/snapface.png';
    constructor(private router: Router) { }

  ngOnInit() {}
  onContinue() {
    this.router.navigateByUrl('facesnaps');
}
}
