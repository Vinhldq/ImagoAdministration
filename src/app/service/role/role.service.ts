import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) {
  }

  getAllRole() {
    let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiYjg3ZGNhM2JjYjY5ZDcyYjZjYmExYjU5YjMzY2M1MjI5N2NhOGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2jGsMahbmcgR2lhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0oyblhITGtOOWpkbktpbUdJSHBVRGpYdWRfRzJrVDRVc01OSmRIbFdPYz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9pdHNzLWltYWdvLTAwMDAiLCJhdWQiOiJpdHNzLWltYWdvLTAwMDAiLCJhdXRoX3RpbWUiOjE3MDk1NDAyMDUsInVzZXJfaWQiOiJHaDdkMmhCSE4yTlZxQ0RGaXZ0UEZYS2dBY2YxIiwic3ViIjoiR2g3ZDJoQkhOMk5WcUNERml2dFBGWEtnQWNmMSIsImlhdCI6MTcwOTU0MDIwNSwiZXhwIjoxNzA5NTQzODA1LCJlbWFpbCI6ImtodW9uZ2hvYW5nZ2lhMzIwMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNTMxNDg2MDM4Mjg5MjQ4MTk1NiJdLCJlbWFpbCI6WyJraHVvbmdob2FuZ2dpYTMyMDJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.Fh7rhRW7sa4Ez37NVuV-iiZ38w5vshe11fMkTlezVWpeyc3VCq6WxEiEoi1_42bS3sfJzYXkFIUrVcLnSPdO2nhGrn5b4VBX9nRlyCE-ByQu9Hq8IttmkgGDyBOyJB7rSkns1q0KnsWKWWfoqJ2h-CUosDZ3GPBHzm8z7N7zyb1guEtAArveukAlfJJA9p19tNQexqPXjgtJ1fbvSM8E_XDIQABPIxYdiKDuKAL490gsEoYNvsN4Qj4y3N_Xkpb3GgAoJHYM7Y13oqD1NObGZMX0NK7K4J93uVlZJq_Fwf_x6EnH2zpxTBYu5YgNLMvh8grpfYdyZBqZICI1c6NPOQ";
    let header = {Authorization: `${token}`};
    return this.httpClient.get(`${environment.local_url}//role`, {headers: header});
  }

  createRole(data: any) {
    const header = {Authorization: `${localStorage.getItem('token')}`};
    return this.httpClient.post(`${environment.local_url}/role`, data, {headers: header});
  }

  updateRole(data: any) {
    const header = {Authorization: `${localStorage.getItem('token')}`};
    return this.httpClient.put(`${environment.local_url}/role`, data, {headers: header});
  }

  deleteRole(id: string) {
    const header = {Authorization: `${localStorage.getItem('token')}`};
    return this.httpClient.delete(`${environment.local_url}/role/${id}`, {headers: header});
  }
}
