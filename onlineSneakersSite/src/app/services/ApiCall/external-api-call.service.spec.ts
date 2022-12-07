import { TestBed } from '@angular/core/testing';

import { ExternalApiCallService } from './external-api-call.service';

describe('ExternalApiCallService', () => {
  let service: ExternalApiCallService;
  const dummyUserListResponse = {
    data: [
      { id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
      { id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
      { id: 3, first_name: 'Emma', last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
    ],
  };  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  // it('getApiWithoutParams() should return data without passing auth token', () => {
  //   service.getApiWithoutParams('https://reqres.in/api/users').subscribe((res) => {
  //     expect(res).toEqual(dummyUserListResponse);
  //   });





  
});
