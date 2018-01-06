import {Injectable} from '@angular/core';
import {PageSpeed, PageSpeedService} from '../gapi/page-speed.service';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PreviewsService {
  public constructor(private pageSpeedService: PageSpeedService) {
  }

  public get(url: string): Observable<PageSpeed> {
    const key = `pagespeed:${url}`;
    const saved = localStorage.getItem(key);

    return saved
      ? of(JSON.parse(saved))
      : this.pageSpeedService.get(url).pipe(
        tap(response => localStorage.setItem(key, JSON.stringify(response))),
      );
  }
}
