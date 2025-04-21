import { Component, OnInit } from '@angular/core';
import { BookServicesService } from 'src/app/services/book-services.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { searchquery } from 'src/app/bean/searchquery';
@Component({
  selector: 'app-book-finder',
  templateUrl: './book-finder.component.html',
  styleUrls: ['./book-finder.component.scss'],
})
export class BookFinderComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookServicesService
  ) { }
  searchResult: searchquery[] = [];
  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      keyword: [''],
    });
  }
  bookForm!: FormGroup;
  searchBook(keyword: any) {
    console.log(keyword);
    this.bookService.getBook(keyword).subscribe((res) => {
      console.log(res.docs);
      this.searchResult = res.docs;
      // console.log(this.searchResult);
    })
  }
}
