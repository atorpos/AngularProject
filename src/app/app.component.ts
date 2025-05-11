import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ImageDropzoneComponent} from './image-dropzone/image-dropzone.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ImageDropzoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
