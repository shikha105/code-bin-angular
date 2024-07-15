import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Snippet } from '../../../models/snippet';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css',
})
export class ViewSnippetComponent {
  constructor(
    private dbService: DatabaseService,
    private route: ActivatedRoute
  ) {}

  codeSnippet = { title: '', code: '' };

  ngOnInit() {
    const snippetId = this.route.snapshot.paramMap.get('id'); //this is to get the parameter id which sent through routes earlier using app routes ts file
    this.dbService.getSnippetById(snippetId!).then((data: any) => {
      this.codeSnippet = data;
      console.log(this.codeSnippet);
    });
  }
}
