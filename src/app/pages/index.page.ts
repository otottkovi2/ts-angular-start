import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main>
      <h1>{{componentTitle}}</h1>
      <div class="container-sm w-1/3 h-48 mx-auto flex flex-col justify-around">
        <h4>Add a new Task:</h4>
        <div class="container-sm flex flex-row justify-around w-3/4 mx-auto"><label for="task-title">Title:</label><input type="text" name="task-title" class="focus:shadow-md" #newItemTitle></div>
        <div class="container-sm flex flex-row justify-around w-3/4 mx-auto"><label for="task-description">Description: </label><input type="text" name="task-description" class="focus:shadow-md" #newItemDescription></div>
        <button class="shadow-md" (click)="addItem(newItemTitle.value,newItemDescription.value)">Add</button>
      </div>
      <ul class="mt-6 w-1/4 mx-auto">
        <li *ngFor="let item of items" class="m-6 p-6 border border-white rounded-md shadow-md bg-black">{{item.title}}</li>
      </ul>
    </main>
  `,
  styleUrl: "../../styles_tw.css",
  imports: [CommonModule]
})
export default class HomeComponent {
  componentTitle = "To-do List"

  filter: 'all' | "active" | "done" = "all"

  allItems: Item[] = [
    { title: "important note", description: "pls do your homework!", isDone: true },
    { title: "important! #2", description: "go outside!", isDone: false },
    { title: "important #3!!!", description: "Remember to drink water!", isDone: false }
  ]

  addItem(title: string, description: string) {
    if (!title) return;
    this.allItems.unshift({ title: title, description: description, isDone: false })
  }

  get items() {
    if (this.filter === "all") return this.allItems
    if (this.filter === "active") return this.allItems.filter(i => !i.isDone)
    return this.allItems.filter(i => i.isDone)
  }
}
