import { Injectable } from '@angular/core';
import { AuthService } from 'ngx-auth';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { AccessData } from './models/access-data.model';

@Injectable({
  providedIn: 'root'
})
export class NgxAuthWso2Service implements AuthService
{
  private _interruptedUrl: string;

  constructor(private http: HttpClient) { }

  getAccessToken(): Observable<string> {
    const accessToken: string = localStorage.getItem('accessToken');

    return of(accessToken);
  }

  isAuthorized(): Observable<boolean> {
    const isAuthorized: boolean = !!localStorage.getItem('accessToken');

    return of(isAuthorized);
  }

  refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  refreshToken(): Observable<any> {
    return undefined;
  }

  verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  setInterruptedUrl(url: string): void {
    this._interruptedUrl = url;
  }

  login(username: string, password: string): Observable<AccessData> {
    let body = `grant_type=password&username=${username}&password=${password}`;
    if (`${environment.scope}`) {
      body += `&scope=${environment.scope}`;
    }
    body = encodeURI(body);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${environment.clientSecret}`
    });
    const options = { headers: headers };

    return this.http.post<AccessData>(`${environment.baseUrl}${environment.token}`, body, options);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresIn');
    location.reload(true);
  }

  get interruptedUrl(): string {
    return this._interruptedUrl;
  }
}
