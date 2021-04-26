import { Component, OnInit } from '@angular/core';
import { DynamoDBAPIService } from 'src/assets/dynamo-dbapi.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  public hobbyItems: any;
  public isHidden: Array<boolean> = [];

  constructor(private dynamoService: DynamoDBAPIService) { }

  ngOnInit(): void {
    this.dynamoService.getAPIData('personalProjects').subscribe((returned: any) => {
      this.hobbyItems = returned.Items;
      for (let i = 0; i < returned.Items.length; i++) {
        this.isHidden[i] = true;
      }
    })
  }
  
  buttonClick(event: any): void {
    if (this.isHidden[event.srcElement.id] === false) {
      this.isHidden[event.srcElement.id] = true;
    } else {
        this.isHidden[event.srcElement.id] = false;
    }
  }
}
