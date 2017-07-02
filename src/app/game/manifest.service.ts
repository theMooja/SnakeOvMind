import { Injectable } from '@angular/core';

@Injectable()
export class ManifestService {
  public manifest = {
    chaos: 36,
    focus: 36,
    calm: 36
  }  

  constructor() { }

  moreChaos() {
    this.manifest.chaos++;
  }

  moreCalm() {
    this.manifest.calm++;
  }

  moreFocus() {
    this.manifest.focus++;
  }
}
