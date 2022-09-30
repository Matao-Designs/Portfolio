import { Injectable } from '@angular/core';
import { SplitService } from '@splitsoftware/splitio-angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitIoService {
  splitReady = false;
  splitsSubject = new BehaviorSubject({});
  splits: Observable<object> = this.splitsSubject.asObservable();

  constructor(private splitService: SplitService) {}

  public initPlugin() {
    const sdkConfig = {
      core: {
        authorizationKey: '',
        key: 'key'
      }
    };
    this.splitService.init(sdkConfig).subscribe(() => {
      this.splitReady = true;
    });
  }

  public getTreatment(splitName: string) {
    this.initPlugin();
    this.splitService.sdkReady$.subscribe(() => {
      const treatment: SplitIO.Treatment =
        this.splitService.getTreatment(splitName);
      this.splitsSubject.next({ [splitName]: treatment });
    });
  }
}
