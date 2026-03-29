import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
