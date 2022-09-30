import { Component, OnInit } from '@angular/core';
import { SplitIoService } from './services/split-io/split-io.service';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Matt Mastej | Portfolio';

  constructor(private split: SplitIoService) {}

  ngOnInit() {
    this.split.getTreatment('Portfolio_Front_End');
    this.split.splits.subscribe((res) => {
      if (this.split.splitReady) {
        console.log(res);
      }
    });
  }
}
