import { AbstractControl, ValidatorFn } from '@angular/forms';
import { idExistsValidator } from './product-id-exists-validator';

describe('idExistsValidator', () => {
  describe('idExistsValidator', () => {
    let control: AbstractControl;
    let validatorFn: ValidatorFn;

    beforeEach(() => {
      control = { value: '123' } as AbstractControl;
      validatorFn = idExistsValidator(true);
    });

    it('should return null if control value is empty', () => {
      control.setValue('');
      const result = validatorFn(control);
      expect(result).toBeNull();
    });

    it('should return null if id exists', () => {
      spyOn(control, 'value').and.returnValue('123');
      const result = validatorFn(control);
      expect(result).toBeNull();
    });

    it('should return validation error if id does not exist', () => {
      spyOn(control, 'value').and.returnValue('456');
      const result = validatorFn(control);
      expect(result).toEqual({ idExists: true });
    });
  });
});
