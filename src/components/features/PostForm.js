import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };
    return (
        <Form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red', fontStyle: 'italic' }}> Title </Form.Label>
                <Form.Control id="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} style={{ width: '50%', color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red', fontStyle: 'italic' }}> Author </Form.Label>
                <Form.Control id="author" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} style={{ width: '50%', color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red', fontStyle: 'italic' }}> Published </Form.Label>
                <Form.Control id="published" type="date" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} style={{ width: '50%', color: publishedDate ? 'blue' : 'black', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red', fontStyle: 'italic' }}> Short description </Form.Label>
                <Form.Control id="short-description" as="textarea" rows={2} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} style={{ color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red', fontStyle: 'italic' }}> Main content </Form.Label>
                <Form.Control id="main-content" as="textarea" rows={6} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)} style={{ color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ borderColor: 'black', boxShadow: '0 0 5px black, 0 0 10px gray, 0 0 15px black' }}>
                {actionText}
            </Button>
        </Form>

    );
};

export default PostForm;