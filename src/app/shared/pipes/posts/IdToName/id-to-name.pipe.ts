import { Pipe, PipeTransform } from '@angular/core';
import { AuthState } from '../../../../ngrx/auth/auth.state';
import { ProfileService } from '../../../../service/profile/profile.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { ProfileModel } from '../../../../models/profile.model';
import { Store } from '@ngrx/store';

@Pipe({
  name: 'idToName',
  standalone: true,
})
export class IdToNamePipe implements PipeTransform {
  token = '';

  constructor(
    private profileService: ProfileService,
    private auth: AuthService,
    private store: Store<{
      auth: AuthState;
    }>
  ) {}

  transform(id: string): Observable<string> {
    this.store.select('auth', 'idToken').subscribe((value) => {
      if (value != null) {
        this.token = value;
      }
    });

    return this.profileService.getProfileById(this.token, id).pipe(
      map((profile: ProfileModel) => {
        return profile.userName;
      }),
      catchError((error) => of('User Name')) // Return 'No name' when an error occurs
    );
  }
}
