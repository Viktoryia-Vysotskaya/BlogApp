import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getPostById, editPost } from '../../redux/postsRedux';
import PostForm from './PostForm/PostForm';

const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    const handleEdit = post => {
        dispatch(editPost({ ...post, postId: postId }));
        navigate('/');
    }
    if (!postData) return <Navigate to="/" />;
    return (
        <PostForm action={handleEdit}
            actionText="Edit post"
            title={postData.title}
            author={postData.author}
            publishedDate={postData.publishedDate}
            category={postData.category}
            shortDescription={postData.shortDescription}
            content={postData.content}
        />
    );
};

export default EditPostForm;