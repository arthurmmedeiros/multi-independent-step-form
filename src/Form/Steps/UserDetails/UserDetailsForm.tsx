import React from 'react';
import CollapsibleForm from '../../Components/CollapsibleForm';
import InputField from '../../Components/Form/InputField';
import { useMultiStepFormContext } from '../../FormContext';
import { IUserDetails } from './Validation';

const UserDetailsForm = () => {
    const { detailsForm } = useMultiStepFormContext();

    return (
        <CollapsibleForm
            form={detailsForm}
            title='User details'
            isOpen={true}
        >
            <>
                <div className='mb-3 row'>
                    <div className='col-md-6'>
                        <InputField<IUserDetails>
                            fieldName='name'
                            placeholder='Enter your name'
                            id='name'
                            label='Name'
                            type='text'
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <InputField<IUserDetails>
                            fieldName='lastName'
                            placeholder='Enter your last name'
                            id='last-name'
                            label='Last name'
                            type='text'
                            required
                        />
                    </div>                    
                </div>
            </>
        </CollapsibleForm>
    );
};


export default UserDetailsForm;