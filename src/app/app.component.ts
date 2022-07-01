import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('banner') banner!: ElementRef
  @ViewChild('about') about!: ElementRef
  @ViewChild('services') services!: ElementRef


  public currentPage: Number = 1;
  public bannerOffset: any = null;
  public aboutOffset: any = null;
  public servicesOffset: any = null;

  public headerVerification: any = 0;

  ngAfterViewInit(): void {
    this.bannerOffset = this.banner.nativeElement.offsetTop;
    this.aboutOffset = this.about.nativeElement.offsetTop;
    this.servicesOffset = this.services.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])

  checkOffsetTop() {
    // let screen = window.pageYOffset;
    console.log(window.pageYOffset);

    // this.headerVerification = window.pageYOffset;

    console.log(this.aboutOffset);

    if(window.pageYOffset >= this.bannerOffset && window.pageYOffset < this.aboutOffset){
      this.currentPage = 1;
    }else if(window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.servicesOffset){
      this.currentPage = 2;
    }else if((window.pageYOffset) >= this.servicesOffset){
      this.currentPage = 3;
    }

  }

  scrollTo(ref: HTMLElement){
    ref.scrollIntoView();
    this.checkOffsetTop();
  }


}
