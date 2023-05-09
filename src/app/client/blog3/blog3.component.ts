import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})
export class Blog3Component implements OnInit {
tabBlog:any[]=[
 {img:"https://www.lindas.ae/blog/wp-content/uploads/2023/03/Golden-Visa-Everything-Dubai-Buyers-and-Investors-Need-to-Know--700x465.jpg",
title1:"Golden ",
title2:"Visa",
desc:"Dubai’s real estate market has long been a highly sought-after destination for buyers and investors alike. With its impressive economic growth, prime location, and world-class infrastructure, it’s no wonder that Dubai has become a hub for global property investment. In recent years, the UAE government has implemented several initiatives to."},
{img:"https://www.arabianbusiness.com/cloud/2021/09/15/zCARZPZs-Dubai-real-estate-Dubai-skyline-2-Medium-2.jpg",
title1:"Benefits of  ",
title2:" Investing in Dubai",
desc:"The Dubai real estate market is currently undergoing incredible growth. In 2021 alone, over 80,000 transactions were recorded, totaling over $80 billion. With one of the most successful economic structures in the world, as well as high capital growth and rental yields, the Dubai real estate market is rightfully the ideal place to invest."},
]
  constructor() { }

  ngOnInit(): void {
  }

}
