import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router:Router) { }
  data:any;
  ngOnInit(): void {
  this.data=[{name:"samy",Lastname:"Ben"},{name:"fatma",Lastname:"blagui"},{name:"khalil",Lastname:"benali"},{name:"nawres",Lastname:"hamdi"}]
  }
  goSomewhere(d){
    alert(d);
this.router.navigateByUrl("");
  }
}
