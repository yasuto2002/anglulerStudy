import { Component, OnInit } from '@angular/core';

interface Test {
  'border-style':string | undefined
  'border-width':string | undefined
  'border-color':string | undefined
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {

  public title:string
  public message:string
  public nowStyle:Test

  public constructor() { 
    this.title = ""
    this.message = ""
    this.nowStyle = {
      'border-style':'',
      'border-width':'',
      'border-color':''
    }
  }

  public ngOnInit(): void {
    this.title = "Hello App"
    this.message = "This is My Print Component"
  }

  public today () :string {
    return new Date().toLocaleString()
  }

  public check(c1:string,c2:string,c3:string) :void{
    this.nowStyle['border-style'] = c1
    this.nowStyle['border-width'] = c2
    this.nowStyle['border-color'] = c3
    this.message = `${String(c1)},${String(c2)},${String(c3)}`
  }

}
