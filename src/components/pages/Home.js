import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import Posts from '../features/Posts';

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 style={{ color: 'blue' }}><strong> All Posts </strong></h2>
                <style>
                    {`
                        #add-post-button:hover {
                        color: red;
                        border-color: blue;
                        background-color: #CCC;
                        }
                    `}
                </style>
                <Button id="add-post-button" variant="outline-info" as={NavLink} to="/post/add" style={{ color: 'blue', borderColor: 'black', boxShadow: '0 0 5px blue, 0 0 10px gray, 0 0 15px blue' }}>
                    Add Post
                </Button>
            </div>
            <Posts />
        </div>
    );
};

export default Home;