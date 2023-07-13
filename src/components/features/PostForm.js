import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const PostForm = ({ action, actionText, ...props }) => {
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if (content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content });
        }
    };
    library.add(faExclamationTriangle);
    return (
        <Form onSubmit={validate(handleSubmit)} style={{ marginTop: '30px' }}>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}> Title </Form.Label>
                <Form.Control
                    {...register("title", { required: true, minLength: 3 })}
                    id="title"
                    placeholder="Enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    style={{ width: '50%', color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }}
                />
                {errors.title && (
                    <small className="d-block text-danger mt-1">
                        <span className="error-icon" style={{ marginRight: '5px' }}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span style={{ fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline' }}>This field requires a minimum of 3 characters. Please enter a valid input!</span>
                    </small>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}> Author </Form.Label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    id="author"
                    placeholder="Enter author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    style={{ width: '50%', color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }}
                />
                {errors.author && (
                    <small className="d-block text-danger mt-1">
                        <span className="error-icon" style={{ marginRight: '5px' }}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span style={{ fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline' }}>
                            This field requires a minimum of 3 characters. Please enter a valid input!
                        </span>
                    </small>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}> Published </Form.Label>
                <Form.Control
                    id="published"
                    type="date"
                    placeholder="Enter date"
                    value={publishedDate}
                    onChange={e => setPublishedDate(e.target.value)}
                    style={{ width: '50%', color: publishedDate ? 'blue' : 'black', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }}
                />
                {dateError && (
                    <small className="d-block form-text text-danger mt-2">
                        <span className="error-icon" style={{ marginRight: '5px' }}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span style={{ fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline' }}>
                            Please provide a published date!
                        </span>
                    </small>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}> Short description </Form.Label>
                <Form.Control
                    {...register("shortDescription", { required: true, minLength: 20 })}
                    id="short-description"
                    as="textarea"
                    rows={2}
                    placeholder="Leave a comment here"
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                    style={{ color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }}
                />
                {errors.shortDescription && (
                    <small className="d-block text-danger mt-1">
                        <span className="error-icon" style={{ marginRight: '5px' }}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span style={{ fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline' }}>
                            This field requires a minimum of 20 characters. Please, enter a valid input!
                        </span>
                    </small>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}> Main content </Form.Label>
                <ReactQuill
                    value={content}
                    onChange={value => setContent(value)}
                    modules={{
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['link'],
                            ['blockquote'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['clean'],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'align': [] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }]
                        ]
                    }}
                    style={{ backgroundColor: 'white', color: 'blue', fontStyle: 'italic', boxShadow: 'inset 0 0 10px gray, inset 0 0 10px black' }}
                />
                {contentError && (
                    <small className="d-block form-text text-danger mt-1">
                        <span className="error-icon" style={{ marginRight: '5px' }}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span style={{ fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline' }}>
                            Please, provide content for this field!
                        </span>
                    </small>
                )}
            </Form.Group>
            <Button variant="primary" type="submit" style={{ borderColor: 'black', boxShadow: '0 0 5px black, 0 0 10px gray, 0 0 15px black' }}>
                {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;