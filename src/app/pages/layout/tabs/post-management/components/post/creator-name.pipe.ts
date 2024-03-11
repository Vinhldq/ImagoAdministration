import { Pipe, PipeTransform } from '@angular/core';
import { PostModel } from '../../../../../../models/post.model';
import { ProfileModel } from '../../../../../../models/profile.model';

@Pipe({
  name: 'creatorName',
  standalone: true,
})
export class CreatorNamePipe implements PipeTransform {
  transform(post: PostModel, profileList: ProfileModel[]): string {
    let profile = profileList.find((profile) => profile.id === post.creatorId);
    return profile ? profile.userName : 'Unknown';
  }
}
