import { trigger, state, style, transition, animate } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);


/**/
export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('500ms ease-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ])
]
);

export const fadeInTrigger = trigger('fadeIn',[
  transition('enter', [
    style ({
      opacity : 0,
      transform: 'scale(1.1)'
    }),
    animate('500 ease-out', style({
      opacity: 1,
      transform: 'scale(1)'
    }))
  ])
]);

export const showStateTrigger = trigger('showState', [
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(300)]),
  transition('* => void', animate(300, style({
    opacity: 0
  })))
]);


