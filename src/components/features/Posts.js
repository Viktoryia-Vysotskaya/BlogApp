import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Row } from "react-bootstrap";
import Post from "./Post/Post";

const Posts = () => {

  const posts = useSelector(getAllPosts);

	return (
    <Row className="justify-content-between">
        {posts.map(post => <Post key={post.id} {...post} />)}  
    </Row>  
	);
};

export default Posts;