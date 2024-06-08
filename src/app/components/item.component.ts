import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Item } from "../models/item";

@Component({
    selector: "app-item",
    standalone: true,
    templateUrl: "./item.component.html",
    styleUrl: "../../styles_tw.css"
})
export default class ItemComponent {

    @Input() item!: Item
    @Output() remove = new EventEmitter<Item>()
}