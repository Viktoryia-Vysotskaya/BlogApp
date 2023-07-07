import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getPostById, editPost } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {
    const disptach = useDispatch();
    const navigate = useNavigate();
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    const handleSubmit = post => {
        disptach(editPost({ ...post, postId: postId }));
        navigate('/');
    }
    if (!postData) return <Navigate to="/" />;
    return (
        <PostForm action={handleSubmit}
            actionText="Edit post"
            title={postData.title}
            author={postData.author}
            publishedDate={postData.publishedDate}
            shortDescription={postData.shortDescription}
            content={postData.content} />
    );
};

export default EditPostForm;