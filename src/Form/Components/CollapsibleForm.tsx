import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import recordIcon from './recordIcon.svg';

interface ICollapsibleFormProps<TModel extends FieldValues, > {
    isOpen: boolean;
    form: UseFormReturn<TModel, any>,
    title: string
}

const CollapsibleForm = <TModel extends FieldValues, >(
    props: PropsWithChildren<ICollapsibleFormProps<TModel>>
) => {   
    const {
        reset,
        handleSubmit,
        formState: {
            isDirty,
            isSubmitting,
            isSubmitSuccessful,
        },
        getValues,
    } = props.form;

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset(getValues());
        }
    }, [isSubmitSuccessful, reset, getValues]);

    const onSubmit = handleSubmit(async data => {
        console.log('submit data: ', data);
    });

    const formStatus = useMemo(() => {
        console.log(isSubmitting)
        if (isSubmitting) {
            return <div className='spinner-border text-primary spinner-border-sm' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        }

        if (isDirty) {
            return <img src={recordIcon} alt='icon'></img>
        }

        return null
    },[isSubmitting, isDirty])

    return (
        <FormProvider {...props.form}>
            <div className='card mb-3'>
                <div className='card-header bg-white border-0 d-flex justify-content-between'>
                    <div className='text-bold fs-4'>
                        {props.title}
                    </div>
                    <div className='text-primary'>
                        {formStatus}
                    </div>
                </div>
                <div className='card-body'>
                    <form onSubmit={onSubmit}>
                        {props.children}
                    </form>
                </div>
                <div className='d-flex flex-row-reverse p-3'>
                    <button className='btn btn-primary' onClick={onSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </FormProvider>
    );
};

export default CollapsibleForm;