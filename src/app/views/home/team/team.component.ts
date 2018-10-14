import {Component, Input, OnInit} from '@angular/core';
import {NguCarousel} from '@ngu/carousel';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarousel;
  public testimonials = [
    {
      photo: 'assets/images/marius.png',
      text: `Marius Kabera is a Project Engineer on Garver's Transportation group. Main responsibilities include the design of highways (rural and urban) and city streets.
       He enjoys working closely with other partners in VHC in studying and selecting investment areas and also creating opportunities for those we do business with.
 In his free time, Marius Enjoys reading books, playing basketball, and catching up on current world events.`,
      title: 'Marius Kabera',
      subtitle: 'Coordinator'
    },
    {
      photo: 'assets/images/panels.jpeg',
      text: `Jean Claude Panels is an experienced Successful Entrepreneur invested in making every realistic business idea come true. Jean Claude owners, 
      and operates his owner business in the hospitality industries. He has also supported and invested in many young entrepreneurs in Rwanda 
      through Mcpanels Global Inc. 
       -"You have to see failure as the beginning and the middle, but never entertain it as an end."`,
      title: 'Jean Claude  Panels',
      subtitle: 'Operations'
    },
    {
      photo: 'assets/images/face-1.jpg',
      text: `“I’ve tried using different softwares. The computer is not my strong side.
      There is excellent support behind DevEgret and people to walk you through it.
      If you have any questions they’ll go over that and explain to you how to do that. ”`,
      title: 'Olivier Iyakaremye',
      subtitle: 'Oversight Committee'
    },
    {
      photo: 'assets/images/fab.png',
      text: `“Experienced Full-Stack Developer currently working at Nike, with a demonstrated history working in the banking, retail and sporting industry. Fabrice is also a Serial tech entrepreneur and avid investor,
       one of VHC founding fathers”`,
      title: 'Fabrice BENIMANA',
      subtitle: 'Oversight Committee'
    }, {
      photo: 'assets/images/face-2.jpg',
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
      title: 'Christian Kabanda',
      subtitle: 'Manager'
    }, {
      photo: 'assets/images/desire.jpeg',
      text: `"Desire Aheza is Software Engineer at Walmart. He is a full stack software engineer with extensive experience in creating highly
       scalable and fault tolerant java based systems in Ecommerce and supply chain domains. He spent most of his free time with his family and learning
       new technologies like cloud computing, distributed systems. He enjoys working with VHC partners to advance our goals"`,
      title: 'Desire Aheza',
      subtitle: 'Finances'
    }, {
      photo: 'assets/images/wellars.png',
      text: `World Class Engineer with executive mindset that spends his days innovating, solving problems and driving results in the fields
     of Software/Hardware at one of the fortunes 500 global technology leading companies; Keza Brand and Keza Technology Ambassador (Keza means Breathtaking in Kinyarwanda), 
     Firm believer in VisionHill Capital, Spending his free time, on community engagement...`,
      title: 'Wellars Muhoza',
      subtitle: 'Finances'
    }]

  constructor() {
  }

  ngOnInit() {
    this.carouselOptions = {
      grid: {xs: 1, sm: 2, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
