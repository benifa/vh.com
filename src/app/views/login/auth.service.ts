import {ActivatedRoute, Router} from '@angular/router';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from '../../models/user.model';
import {AppLoaderService} from '../../services/app-loader/app-loader.service';
import {Contribution} from '../../models/contribution.model';


@Injectable()
export class AuthService {
  BASE_URL = 'https://api.fanya.io:444';
  clientId: string;
  token: String;
  refreshToken: String;
  user: User;
  userContributions = [];
  totalContributions = 0;
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
            this.getContributionsForMember()
          }
        },
        (error: Error) => {
          this.isLoading = false;
         this.loader.close()
        }
      );
  }

  register(firstname: String, lastname: String, phone: String, account: String,
           email: string, password: string, date: String) {

    this.isLoading = true;
    this.loader.open('crating')
    this.http.put(this.BASE_URL + '/member', {
      'email' : email,
      'password' : password,
      'firstname' : firstname,
      'lastname' : lastname,
      'phone' : phone,
      'account' : account,
      'joining_date' : date
    }, this.getHeaders())
      .subscribe(
        (response: Response) => {
          this.loader.close()
          if (response['ok']) {
            this.isLoading = false;
            this.router.navigate(['/login']);
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

  getContributionsForMember() {
    this.isLoading = true;
    this.http.get(this.BASE_URL + '/contributions/' + this.user.id)
      .map(
        (response: Response) => {
          const data = response.json();
          this.userContributions = data['contributions']
          this.totalContributions = 0
          this.userContributions.forEach((e: Contribution) => {
            this.totalContributions += e.amount;
          });
          return data;
        })
      .subscribe(
        (response: Response) => {
          this.isLoading = false;
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
//contributions

}

/*
*  map(
        (data: TaxFile[]) => {
          this.isLoading = false;
          this.loader.close()
          this.taxeFilesReady = true;
          this.links = data['files'];
          this.router.navigate(['/home/download']);
        }), catchError(error => {
        this.isLoading = false;
        this.loader.close()

        return throwError('Something went wrong!');
      })
*
*
*
* */
