import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'fr-input-text',
  standalone: true,
  imports: [MatInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FrInputTextComponent),
      multi: true,
    },
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class FrInputTextComponent implements ControlValueAccessor {
  @Input()
  label: string = '';

  @Input()
  type: string = 'text';

  @Input()
  placeholder: string;

  @Input()
  value: string = '';

  floatLabel: FloatLabelType = 'always';

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
