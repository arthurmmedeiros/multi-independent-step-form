import { PropsWithChildren } from 'react';
import { FieldValues, useFormContext, FieldPath } from 'react-hook-form';

export interface IInputField <TFormModel extends FieldValues, >{
    fieldName: FieldPath<TFormModel>;
    disabled?: boolean;
    placeholder: string;
    id: string;
    label: string;
    type: 'text' | 'number' | 'time' | 'textarea';
    className?: string;
    required?: boolean;
}

const InputField = <TFormModel extends FieldValues>(
    props: PropsWithChildren<IInputField<TFormModel>>
) => {
    const {
        formState: { errors },
        register
    } = useFormContext<TFormModel>();

    const error = errors[props.fieldName as string];
    
    return (
        <div className={`${props.className ?? ''} form-group`}>
            <label 
                htmlFor={props.fieldName} 
                className={props.required === true ? 'required' : ''}>
                {props.label}
            </label>
            <input
                type={props.type}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id={props.id}
                placeholder={props.placeholder}
                {...register(props.fieldName, {
                    valueAsNumber: props.type === 'number'
                })}
                aria-invalid={!!error}
                disabled={props.disabled}
                required={props.required}
            />
            {error && <span className='text-danger'>{error?.message as unknown as string}</span>}
        </div>
    );
};

InputField.defaultProps = {
    disabled: undefined,
    className: undefined,
    required: false
};

export default InputField;
