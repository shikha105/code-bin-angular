import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Snippet } from '../../../models/snippet';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private dbService: DatabaseService) {}

  codeSnippets: Snippet[] = [];

  ngOnInit() {
    this.dbService.getAllSnippets().then((data: any) => {
      this.codeSnippets = data;
      console.log(this.codeSnippets);
    });
  }
}
