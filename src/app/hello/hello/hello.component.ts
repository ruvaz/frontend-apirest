import {Component, OnInit} from '@angular/core';
import {HelloService} from '../../services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: []
})
export class HelloComponent implements OnInit {
  public hello;

  constructor(
    private helloService: HelloService
  ) {
  }

  ngOnInit(): void {
    this.helloService.getHello().subscribe(
      resp => {
        confirm(JSON.stringify(resp));
      }
    );
  }

}
