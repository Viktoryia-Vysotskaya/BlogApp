import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import Post from "../../features/Post/Post";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div>
            <div className={styles['home-container']}>
                <h2><strong> All Posts </strong></h2>
                <Button id="add-post-button" variant="outline-info" as={NavLink} to="/post/add" className={styles['add-post-button']}>
                    Add Post
                </Button>
            </div>
            <Post />
        </div>
    );
};

export default Home;