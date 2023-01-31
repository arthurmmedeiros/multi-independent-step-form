import CollapsibleForm from '../../Components/CollapsibleForm';
import InputField from '../../Components/Form/InputField';
import { useMultiStepFormContext } from '../../FormContext';
import { IUserEducation } from './Validation';
import { useWatch } from 'react-hook-form';

const UserEducationForm = () => {
    const { educationForm, detailsForm } = useMultiStepFormContext();

    const watchDetailsForm = useWatch(detailsForm);
    
    return (
        <CollapsibleForm
            form={educationForm}
            title='User education'
            isOpen={true}
        >
            <>
                <div className='mb-3 row'>
                    <div className='col-md-6'>
                        <InputField<IUserEducation>
                            fieldName='school'
                            placeholder='Where did you study?'
                            id='school'
                            label='School'
                            type='text'
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <InputField<IUserEducation>
                            fieldName='major'
                            placeholder='What did you study?'
                            id='major'
                            label='Major'
                            type='text'
                            required
                        />
                    </div>                    
                </div>
            </>
        </CollapsibleForm>
    );
};

export default UserEducationForm;