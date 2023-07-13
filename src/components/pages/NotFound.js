import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <section>
            <h2 style={{ color: 'blue', paddingBottom: '50px' }}><strong>404 not found</strong></h2>
            <div>
                <span className="error-icon" style={{ color: 'red', marginRight: '10px' }}>
                    <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                </span>
                <p style={{ color: 'red', fontWeight: 'bold', textDecoration: 'underline', paddingTop: '30px' }}>
                    The requested page could not be located... <br />
                    Please, make sure you have entered the correct URL...
                </p>
            </div>
        </section>
    );
};

export default NotFound;
