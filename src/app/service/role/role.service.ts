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

  getAllRole(idToken: string, page: number) {
    return this.httpClient.get<RoleModel>(
      environment.local_url + `role/all?page=${page}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        })
      }
    );
  }

  getAllSearchRole(idToken: string, page: number) {
    return this.httpClient.get<RoleModel>(
      environment.local_url + `role?page=${page}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        })
      }
    );
  }

  createRole(data: RoleModel) {
    const header = {Authorization: `${localStorage.getItem('token')}`};
    return this.httpClient.post(`${environment.local_url}role`, data, {headers: header});
  }

  updateRole(id: string, updateRole: RoleModel) {
    const header = {Authorization: `${localStorage.getItem('token')}`};
    return this.httpClient.put(`${environment.local_url}role?id=${id}`, updateRole, {headers: header});
  }

  deleteRole(id: string) {
    const header = {Authorization: `${localStorage.getItem('token')}`};
    return this.httpClient.delete(`${environment.local_url}role?id=${id}`, {headers: header});
  }
}
