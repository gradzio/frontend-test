import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, SearchInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ButtonComponent, SearchInputComponent],
})
export class SharedModule {}
