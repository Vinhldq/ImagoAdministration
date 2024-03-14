import { Pipe, PipeTransform } from '@angular/core';
import { AuthState } from '../../../../ngrx/auth/auth.state';
import { ProfileService } from '../../../../service/profile/profile.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { Observable, map } from 'rxjs';
import { ProfileModel } from '../../../../models/profile.model';
import { Store } from '@ngrx/store';

@Pipe({
  name: 'idToPicture',
  standalone: true,
})
export class IdToPicturePipe implements PipeTransform {
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
        return profile.photoUrl;
      })
    );
  }
}
