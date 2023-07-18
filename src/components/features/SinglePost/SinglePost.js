import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useParams, Navigate, NavLink } from "react-router-dom";
import { useState } from 'react';
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import styles from './SinglePost.module.scss';

const SinglePost = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removePost(postId));
        handleClose();
    }
    if (!postData) return <Navigate to="/" />
    return (
        <>
            <Row className={styles['single-post']}>
                <Col xs="12" md="10" lg="8">
                    <header className={`${styles['post-header']}`}>
                        <h2>{postData.title}</h2>
                        <div>
                            <Button
                                id="edit-button"
                                variant="outline-info"
                                as={NavLink}
                                to={`/post/edit/${postData.id}`}
                                className={`${styles['edit-button']}`}
                            >
                                Edit
                            </Button>
                            <Button
                                id="delete-button"
                                variant="outline-danger"
                                onClick={handleShow}
                                className={`${styles['delete-button']}`}
                            >
                                Delete
                            </Button>
                        </div>
                    </header>
                    <div className={`${styles['py-4']}`}>
                        <div>
                            <span className={`${styles['fw-bold']}`}> Author: </span>
                            <span>{postData.author}</span>
                        </div>
                        <div>
                            <span className={`${styles['fw-bold']}`}> Published: </span>
                            <span>{postData.publishedDate}</span>
                        </div>
                        <div>
                            <span className={`${styles['fw-bold']}`}> Category: </span>
                            <span>{postData.category}</span>
                        </div>
                    </div>
                    <article className={styles['article']} dangerouslySetInnerHTML={{ __html: postData.content }}></article>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} className={styles['custom-modal']}>
                <Modal.Header closeButton>
                    <Modal.Title className={styles['modal-title']}> Are you sure you want to do that? </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles['modal-body']}> Are you absolutely certain you want to proceed with this action? <br /> Once completed, this post will be permanently erased from the app! </Modal.Body>
                <Modal.Footer>
                    <Button id="cancel-button" variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button id="remove-button" variant="danger" onClick={handleRemove}> Remove </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SinglePost;