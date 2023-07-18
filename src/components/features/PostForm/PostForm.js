import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from "react-redux";
import styles from './PostForm.module.scss';

const PostForm = ({ action, actionText, ...props }) => {
    const { register, handleSubmit: onSubmitHandler, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const [categoryError, setCategoryError] = useState(false);
    const categories = useSelector(getAllCategories);

    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        setCategoryError(category === '');
        if (content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content, category });
        }
    };
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setCategoryError(selectedCategory === '');
    };

    library.add(faExclamationTriangle);
    return (
        <Form onSubmit={onSubmitHandler(handleSubmit)} className={styles['post-form']}>
            <Form.Group className={`${styles['form-group']} mb-3`}>
                <Form.Label> Title </Form.Label>
                <Form.Control
                    {...register("title", { required: true, minLength: 3 })}
                    id="title"
                    placeholder="Enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className={`${styles['form-control']} ${errors.title ? 'is-invalid' : ''}`}
                />
                {errors.title && (
                    <small className="d-block text-danger mt-1">
                        <span className={`error-icon ${styles['error-icon']}`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className={styles['error-text']}>This field requires a minimum of 3 characters. Please, enter a valid input!</span>
                    </small>
                )}
            </Form.Group>

            <Form.Group className={`${styles['form-group']} mb-3`}>
                <Form.Label> Author </Form.Label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    id="author"
                    placeholder="Enter author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className={`${styles['form-control']} ${errors.title ? 'is-invalid' : ''}`}
                />
                {errors.author && (
                    <small className="d-block text-danger mt-1">
                        <span className={`error-icon ${styles['error-icon']}`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className={styles['error-text']}>
                            This field requires a minimum of 3 characters. Please, enter a valid input!
                        </span>
                    </small>
                )}
            </Form.Group>

            <Form.Group className={`${styles['form-group']} mb-3`}>
                <Form.Label> Published </Form.Label>
                <Form.Control
                    id="published"
                    type="date"
                    placeholder="Enter date"
                    value={publishedDate}
                    onChange={e => setPublishedDate(e.target.value)}
                    className={`${styles['form-control']} ${errors.title ? 'is-invalid' : ''}`}
                />
                {dateError && (
                    <small className="d-block form-text text-danger mt-1">
                        <span className={`error-icon ${styles['error-icon']}`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className={styles['error-text']}>
                            Please, provide a published date!
                        </span>
                    </small>
                )}
            </Form.Group>

            <Form.Group className={`${styles['form-group']} mb-4`}>
                <Form.Label> Category </Form.Label>
                <Form.Select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className={`${styles['form-control']} ${errors.title ? 'is-invalid' : ''}`}
                >
                    <option> Select a category... </option>
                    <option>{categories[0]}</option>
                    <option>{categories[1]}</option>
                    <option>{categories[2]}</option>
                </Form.Select>
                {categoryError && (
                    <small className="d-block text-danger mt-1">
                        <span className={`error-icon ${styles['error-icon']}`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className={styles['error-text']}>
                            Please, select a category!
                        </span>
                    </small>
                )}
            </Form.Group>

            <Form.Group className={`${styles['form-group']} mb-3`}>
                <Form.Label> Short description </Form.Label>
                <Form.Control
                    {...register("shortDescription", { required: true, minLength: 20 })}
                    id="short-description"
                    as="textarea"
                    rows={2}
                    placeholder="Leave a comment here"
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                    className={`${styles['form-control']} ${errors.title ? 'is-invalid' : ''}`}
                />
                {errors.shortDescription && (
                    <small className="d-block text-danger mt-1">
                        <span className={`error-icon ${styles['error-icon']}`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className={styles['error-text']}>
                            This field requires a minimum of 20 characters. Please, enter a valid input!
                        </span>
                    </small>
                )}
            </Form.Group>

            <Form.Group className={`${styles['form-group']} mb-3`}>
                <Form.Label> Main content </Form.Label>
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
                    className={`${styles['form-control']} ${errors.title ? 'is-invalid' : ''}`}
                    style={{ backgroundColor: 'white' }}
                />
                {contentError && (
                    <small className="d-block form-text text-danger mt-1">
                        <span className={`error-icon ${styles['error-icon']}`}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <span className={styles['error-text']}>
                            Please, provide content for this field!
                        </span>
                    </small>
                )}
            </Form.Group>

            <Button variant="primary" type="submit" className={styles['submit-button']}>
                {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;