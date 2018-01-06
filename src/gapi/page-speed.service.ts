import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Configuration} from './interfaces';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

const prepare = (response: PageSpeedResponse): PageSpeed => ({
  title: response.title,
  score: response.score,
  img: {
    src: 'data:' + response.screenshot.mime_type + ';base64,' + response.screenshot.data.replace(/_/g, '/').replace(/-/g, '+'),
    width: response.screenshot.width,
    height: response.screenshot.height
  }
});

const ensureUrl = (url: string): string => url.indexOf('http') === 0 ? url : `http://${url}`;

@Injectable()
export class PageSpeedService {
  constructor(@Inject('configuration') private configuration: Configuration, private http: HttpClient) {
  }

  public get(url: string): Observable<PageSpeed> {
    const api = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed';
    const params = new HttpParams()
      .set('url', ensureUrl(url))
      .set('key', this.configuration.apiKey || '')
      .set('screenshot', 'true');
    const options = {
      params: params
    };
    return this.http.get<PageSpeedResponse>(api, options).pipe(map(prepare));
  }
}

interface PageSpeedResponse {
  title: string;
  score: number;
  screenshot: {
    data: string;
    width: number;
    height: number;
    mime_type: string;
  };
}

export interface PageSpeed {
  title: string;
  score: number;
  img: {
    src: string;
    width: number;
    height: number;
  };
}
