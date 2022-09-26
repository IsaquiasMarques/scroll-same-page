import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild('banner') banner!: ElementRef
  @ViewChild('about') about!: ElementRef
  @ViewChild('services') services!: ElementRef

  @ViewChild('firstItemInMenu') firstItem !: ElementRef;
  @ViewChild('secondItemInMenu') secondItem !: ElementRef;
  @ViewChild('thirdItemInMenu') thirdItem !: ElementRef;
  @ViewChild('underline') underline !: ElementRef;


  public currentPage: Number = 1;
  public bannerOffset: any = null;
  public aboutOffset: any = null;
  public servicesOffset: any = null;

  public headerVerification: any = 0;


  fItemLeft: any;
  fItemWidth: any;

  sItemLeft: any;
  sItemWidth: any;

  tItemLeft: any;
  tItemWidth: any;

  underlineLeft: any;
  underlineWidth: any;


  ngAfterViewInit(): void {
    this.bannerOffset = this.banner.nativeElement.offsetTop;
    this.aboutOffset = this.about.nativeElement.offsetTop;
    this.servicesOffset = this.services.nativeElement.offsetTop;

    this.fItemLeft = this.firstItem.nativeElement.offsetLeft;
    this.sItemLeft = this.secondItem.nativeElement.offsetLeft;
    this.tItemLeft = this.thirdItem.nativeElement.offsetLeft;

    this.fItemWidth = this.firstItem.nativeElement.offsetWidth;
    this.sItemWidth = this.secondItem.nativeElement.offsetWidth;
    this.tItemWidth = this.thirdItem.nativeElement.offsetWidth;


    this.underlineLeft = this.fItemLeft;
    this.underlineWidth = this.fItemWidth;
  }

  ngOnInit(): void{
  
    // this.underlineLeft = this.fItemLeft;
  }

  checkUnderlinePosition(){
    let interval = setInterval(() => {
      this.conditions();
    }, 1);
  }


  @HostListener('window:scroll', ['$event'])

  checkOffsetTop() {
    
    this.checkUnderlinePosition();
    // let screen = window.pageYOffset;
    // console.log(window.pageYOffset);

    // this.headerVerification = window.pageYOffset;

    // console.log(this.aboutOffset);

    // this.conditions();

  }

  scrollTo(ref: HTMLElement){
    ref.scrollIntoView();
  }

  conditions(){
    if(window.pageYOffset >= this.bannerOffset && window.pageYOffset < this.aboutOffset){
      this.currentPage = 1;
      this.underlineLeft = this.fItemLeft;
      this.underlineWidth = this.fItemWidth;

    }else if(window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.servicesOffset){
      this.currentPage = 2;
      this.underlineLeft = this.sItemLeft;
      this.underlineWidth = this.sItemWidth;

    }else if((window.pageYOffset) >= this.servicesOffset){
      this.currentPage = 3;
      this.underlineLeft = this.tItemLeft;
      this.underlineWidth = this.tItemWidth;
    }
  }

}
