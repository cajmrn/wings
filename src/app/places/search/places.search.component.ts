import {Component, Input} from "@angular/core";

@Component({
  selector: 'places-search',
  templateUrl: './places.search.component.html',
  styleUrls: ['./places.search.component.less']
})
export class PlacesSearchComponent {

  searchByTitle!: string;
  @Input() onSearchChange!: (title: string) => void;

  constructor() {
  }

  onSearchChangeEvent(event: any) {
    if (event && event.target && event.target.value) {
      this.onSearchChange(event.target.value);
    } else {
      this.searchByTitle = '';
      this.onSearchChange(this.searchByTitle);
    }
  }
}
