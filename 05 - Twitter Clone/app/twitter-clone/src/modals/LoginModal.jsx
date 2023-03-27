import { useCallback } from 'react';
import { useLoginModal } from '../hooks/useLoginModal';

export default function LoginModal() {

    const loginModel = useLoginModal();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = useCallback( async() => {
        try {

            setIsLoading(true);

            // Login

            loginModel.onClose();

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModel]);

    return (
        <div>loginModal</div>
    )
}
