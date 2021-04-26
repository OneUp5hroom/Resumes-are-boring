import { Component, OnInit } from '@angular/core';
import { DynamoDBAPIService } from '../../assets/dynamo-dbapi.service';
import { formatDate } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public workHistory: Array<any> = [];
  public isHidden: Array<boolean> = [];
  public resumeItems: Array<any> = [];

  constructor(private dynamoService: DynamoDBAPIService) {
    console.log('ResumeComponent');
   }

  ngOnInit(): void {
    this.dynamoService.getAPIData('ResumeItems').subscribe((returned: any) => {
      this.resumeItems = returned.Items;
    })
    this.dynamoService.getAPIData('WorkHistory').subscribe(( returned: any ) => {
      console.log(returned.Items);
      let totalCount: number = returned.Items.length - 1;
      let tempData: any;
      let id: number;
      for (let i = 0; i < returned.Items.length; i++) {
        this.isHidden[i] = true;
        id = totalCount - i
        for (let j = 0; j < returned.Items.length; j++) {
          if(returned.Items[j].id === id) {
            tempData = returned.Items[j];
          }
        }
        if (tempData.EndDate === 0) {
          tempData.EndDate = 'Current';
        } else {
          tempData.EndDate = formatDate(tempData.EndDate, 'MM/YYYY', "en-US");
        }
        this.workHistory[i] = tempData;
      }
    });
  }
  buttonClick(event: any): void {
    if (this.isHidden[event.srcElement.id] === false) {
      this.isHidden[event.srcElement.id] = true;
    } else {
        this.isHidden[event.srcElement.id] = false;
    }
  }
  
}
