import { Component, OnInit } from '@angular/core';
import { ManifestService } from './../manifest.service';

@Component({
  selector: 'app-abyss',
  templateUrl: './abyss.component.html',
  styleUrls: ['./abyss.component.css'],
  providers: [ManifestService]
})
export class AbyssComponent implements OnInit {
  manifest: {};
  constructor(private manifestService: ManifestService) { }

  ngOnInit() {
    this.manifest = this.manifestService.manifest;
  }

}
