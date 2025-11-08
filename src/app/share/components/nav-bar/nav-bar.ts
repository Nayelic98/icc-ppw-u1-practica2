import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styles: [ `nav{
      background-color: #159;
      padding: 1rem;
    }
    a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
    a.active{
      color:yellow;
      text-decoration: underline;
    }
    <a.hover{
      text-decoration: underline;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar { }