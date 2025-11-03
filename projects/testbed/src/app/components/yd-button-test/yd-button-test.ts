import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

export enum YdBtnSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
};

export enum YdBtnStyle {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
};

@Component({
  selector: 'yd-button-test',
  imports: [
    NgClass,
  ],
  templateUrl: './yd-button-test.html',
  host:{
    '[class.pointer-events--none]':'disabled()',
    '[class.w--100]':'fullSize()',
    'class':'yd-btn__container',
  }
})
export class YdButtonTest {
  public size = input.required<YdBtnSize>();
  public buttonStyle = input.required<YdBtnStyle>();
  public type = input<string>('text');
  
  public disabled = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });
  
  public fullSize = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });

}
