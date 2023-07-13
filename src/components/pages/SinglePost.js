import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../redux/postsRedux";
import { useParams, Navigate, NavLink } from "react-router-dom";
import { useState } from 'react';
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

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
            <Row className="justify-content-center" style={{ marginTop: '80px' }}>
                <Col xs="12" md="10" lg="8">
                    <header className="d-flex justify-content-between align-items-center">
                        <h2 style={{ color: '#444' }}>
                            {postData.title}
                        </h2>
                        <div>
                            <style>
                                {`
                                    #edit-button:hover {
                                    color: red;
                                    border-color: blue;
                                    background-color: #CCC;
                                    }
                                `}
                            </style>
                            <Button
                                id="edit-button"
                                variant="outline-info"
                                as={NavLink}
                                to={`/post/edit/${postData.id}`}
                                style={{
                                    marginRight: '20px',
                                    color: 'blue',
                                    borderColor: 'black',
                                    boxShadow: '0 0 5px blue, 0 0 10px gray, 0 0 15px blue',
                                    backgroundColor: 'white',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseEnter={e => {
                                    e.target.style.backgroundColor = '#C0C0C0';
                                    e.target.style.color = 'black';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.color = 'blue';
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                id="delete-button"
                                variant="outline-danger"
                                onClick={handleShow}
                                style={{
                                    color: 'red',
                                    backgroundColor: 'white',
                                    boxShadow: '0 0 5px red, 0 0 10px gray, 0 0 15px red',
                                    transition: 'background-color 0.3s ease, color 0.3s ease'
                                }}
                                onMouseEnter={e => {
                                    e.target.style.backgroundColor = '#C0C0C0';
                                    e.target.style.color = 'black';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.color = 'red';
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </header>
                    <div className="py-4">
                        <div>
                            <span className="fw-bold" style={{ color: 'blue' }}> Author: </span>
                            <span>{postData.author}</span>
                        </div>
                        <div>
                            <span className="fw-bold" style={{ color: 'blue' }}> Published: </span>
                            <span>{postData.publishedDate}</span>
                        </div>
                    </div>
                    <article style={{ color: 'red', fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: postData.content }}></article>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} style={{ textAlign: 'center', marginTop: '250px' }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'red', paddingLeft: '40px' }}> Are you sure you want to do that? </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: 'blue', fontSize: '14px' }}> Are you absolutely certain you want to proceed with this action? <br /> Once completed, this post will be permanently erased from the app! </Modal.Body>
                <Modal.Footer>
                    <Button id="cancel-button" variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button id="remove-button" variant="danger" onClick={handleRemove}> Remove </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SinglePost;