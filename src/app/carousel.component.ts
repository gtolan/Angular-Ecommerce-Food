import { Component, OnInit } from "@angular/core";

@Component({
  selector: "carousel",
  templateUrl: "carousel.component.html",
  styleUrls: ["carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  activeCarouselSlide: number = 1;
  slides = [
    {
      id: 1,
      title: "Burgers",
      icon: "/assets/videos/burger-icon.png",
      text: "Barbequed Beef and Chicken stacked",
      video: {
        poster: "/assets/videos/burgers.png",
        webm: "/assets/videos/burgersVid1.webm",
        mp4: "/assets/videos/burgersVid1.mp4"
      }
    },
    {
      id: 2,
      title: "Pizza",
      icon: "/assets/videos/pizza-icon.png",
      text: "Mama mia! Try our stone oven thin based pizza",
      video: {
        poster: "/assets/videos/pizza.png",
        webm: "/assets/videos/pizzaVid.webm",
        mp4: "/assets/videos/pizzaVid.mp4"
      }
    },
    {
      id: 3,
      title: "Desserts",
      icon: "/assets/videos/icecream-icon.png",
      text: "Homemade selection of Icecream ",
      video: {
        poster: "/assets/videos/icecream.png",
        webm: "/assets/videos/DessertsVid.webm",
        mp4: "/assets/videos/DessertsVid.png"
      }
    }
  ];
  constructor() {}
  ngOnInit() {
    this.startCarousel();
  }
  startCarousel() {
    const runSlideShow = () => {
      setTimeout(() => {
        // console.log(this.activeCarouselSlide);
        this.activeCarouselSlide < this.slides.length
          ? this.activeCarouselSlide++
          : (this.activeCarouselSlide = 1);
        // console.log(this.activeCarouselSlide);
        runSlideShow();
      }, 3500);
    };
    runSlideShow();
  }
  setActiveSlide(id) {
    this.activeCarouselSlide = id;
  }
  rightSlide() {
    console.log("clikced");
    this.activeCarouselSlide < this.slides.length
      ? this.activeCarouselSlide++
      : (this.activeCarouselSlide = 1);
  }
  leftSlide() {
    console.log("clikced");
    this.activeCarouselSlide === 1
      ? (this.activeCarouselSlide = 3)
      : this.activeCarouselSlide--;
  }
}
