import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IUserEducation, userEducationValidator } from './Steps/UserEducation/Validation';
import { IUserDetails, userDetailsValidator } from './Steps/UserDetails/Validation';
import { MultiStepFormContext } from './FormContext';
import UserDetailsForm from './Steps/UserDetails/UserDetailsForm';
import UserEducationForm from './Steps/UserEducation/UserEducationForm';

const Index = () => {
    const detailsForm = useForm<IUserDetails>({
        resolver: zodResolver(userDetailsValidator),
        mode: 'all'
    });

    const educationForm = useForm<IUserEducation>({
        resolver: zodResolver(userEducationValidator),
        mode: 'all'
    });
    
    return (
        <MultiStepFormContext.Provider value={{
            detailsForm,
            educationForm,
        }}
        >
            <div className='container mx-auto mt-5'> 
            <h1>User form</h1>
                <UserDetailsForm/>
                <UserEducationForm/>
            </div>
        </MultiStepFormContext.Provider>
    );
};

export default Index;