import { Component, OnInit } from '@angular/core';
import { ManifestService } from './../manifest.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  manifest: {};
  
  constructor(private manifestService: ManifestService) { }

  ngOnInit() {
    this.manifest = this.manifestService.manifest;
  }

  moreChaos() {
    this.manifestService.moreChaos();
  }

  moreCalm() {
    this.manifestService.moreCalm();
  }

  moreFocus() {
    this.manifestService.moreFocus();
  }

}
