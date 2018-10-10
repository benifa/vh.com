import {ActivatedRoute, Router} from '@angular/router';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from '../../models/user.model';
import {AppLoaderService} from '../../services/app-loader/app-loader.service';

@Injectable()
export class AuthService {
  BASE_URL = 'http://ec2-18-222-232-199.us-east-2.compute.amazonaws.com:80';
  clientId: string;
  token: String;
  refreshToken: String;
  user: User;
  isLoading: boolean;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private loader: AppLoaderService) {

  }

  signUpUser(email: string, password: string) {
  }

  loginUser(email: string, password: string) {
    this.isLoading = true;
    this.loader.open('checking!')
    this.http.post(this.BASE_URL + '/login', {
      'email': email,
      'password': password
    }, this.getHeaders())
      .subscribe(
        (response: Response) => {
          this.loader.close()
          if (response['ok']) {
            this.isLoading = false;
            const body = response.json();
            this.token = body['access_token'];
            this.refreshToken = body['refresh_token'];
            this.user = body['member'];
            this.router.navigate(['/login', this.user.firstname]);
          }
        },
        (error: Error) => {
          this.isLoading = false;
         this.loader.close()
        }
      );

  }

  getUserInformation() {
    // this.isLoading = true;
    this.http.get(this.BASE_URL + this.clientId + '/user')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        })
      .subscribe(
        (response: Response) => {
          this.isLoading = false;
          if (response['ok']) {
            this.isLoading = false;
            this.user = response.json();
          }
        },
        (error: Error) => {
          this.isLoading = false;
        }
      );

  }

  logout() {
    if (this.token) {
      this.isLoading = true;
      this.loader.open('exiting')
      this.http.delete(this.BASE_URL + 'logout', this.getHeaders())
        .subscribe(
          (response: Response) => {
            this.loader.close()
            this.isLoading = false;
            this.router.navigate(['/login']);
          },
          (error: Error) => {
            this.loader.close()
            this.isLoading = false;
            this.router.navigate(['/login']);
          }
        );
      this.token = null;
    } else {
      this.router.navigate(['/home']);
    }
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  isAuthenticating() {
    return this.isLoading;
  }

  getUserInfo() {
    return this.user;
  }

  getHeaders() {
    const headersParams = new Headers();
    // headersParams.append('Content-Type', 'application/json');
    // headersParams.append('Authorization', 'Bearer ' + this.token);
    headersParams.append('Access-Control-Allow-Origin', '*');
    return new RequestOptions({headers: headersParams});
  }

  getRefreshHeaders() {
    const headersParams = new Headers();
    headersParams.append('Content-Type', 'application/json');
    headersParams.append('Authorization', 'Bearer ' + this.refreshToken);
    return new RequestOptions({headers: headersParams});
  }

  refreshTokenIfNeeded(responseObser) {
    return this.http.post(this.BASE_URL + 'refresh', null, this.getRefreshHeaders())
      .map(
        ((response: Response) => {
          if (response['ok']) {
            return responseObser;
          } else {
            this.router.navigate([this.clientId + '/login']);
          }
        })
      );
  }

  getExpectationProgress(progressUri) {
    this.isLoading = true;
    return this.http.get(progressUri, this.getHeaders())
      .map(
        (response: Response) => {
          // this.isLoading = false;
          const data = response.json();
          // this.progressUpdated.next(data);
          return data;
        })
      .catch(e => {
        if (e.status === 401) {
          return this.http.post(this.BASE_URL + 'refresh', this.getRefreshHeaders)
            .map(
              ((response: Response) => {
                this.getExpectationProgress(progressUri);
              })
            );
        }
      });
  }


}
