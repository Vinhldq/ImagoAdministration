import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RoleModel} from '../../models/role.model';
import {AuthModel} from "../../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) {
  }

  getAllRole(idToken: string, page: number, size: number) {
    return this.httpClient.get<RoleModel>(
      environment.local_url + `role/all?page=${page}&size=${size}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        })
      }
    );
  }

  getListAdminRole(idToken: string, page: number, size: number) {
    return this.httpClient.get<RoleModel>(
      environment.local_url + `role/list?page=${page}&size=${size}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        })
      }
    );
  }

  createRole(idToken: string, data: RoleModel) {
    return this.httpClient.post(`${environment.local_url}role`, data, {headers: new HttpHeaders({Authorization: `${idToken}`})});
  }

  updateRole(idToken: string, id: string, updateRole: RoleModel) {
    return this.httpClient.put(`${environment.local_url}role?id=${id}`, updateRole, {headers: new HttpHeaders({Authorization: `${idToken}`})});
  }

  deleteRole(idToken: string, id: string) {
    return this.httpClient.delete(`${environment.local_url}role?id=${id}`, {headers: new HttpHeaders({Authorization: `${idToken}`})});
  }
}
