import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  currentUrl: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Listen to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentUrl === route;
  }
}
