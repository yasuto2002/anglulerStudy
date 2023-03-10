import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  title:string
  message:string
  price:number
  now:Date
  styleClass:string
  name:string

  constructor() { 
    this.title = ""
    this.message = ""
    this.price = 0
    this.now = new Date()
    this.styleClass = 'red'
    this.name = ''

    setInterval(()=>{
      this.now = new Date()
    },1000)


  }

  ngOnInit(): void {
    this.title = "Hello App"
    this.message = "This is My Print Component"
    this.price = 100
  }

  today () :string {
    return new Date().toLocaleString()
  }

}
