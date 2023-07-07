import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllPosts } from '../../redux/postsRedux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <Row className='py-4'>
            {posts.map((post) => (
                <Col key={post.id} xs='12' md='6' lg='4' className='mb-4'>
                    <Card style={{ boxShadow: '0 0 5px black, 0 0 10px gray, 0 0 15px black', marginTop: '30px' }}>
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title style={{ paddingBottom: '30px', color: '#444' }}><strong> {post.title} </strong></Card.Title>
                            <div style={{ textAlign: 'center' }}>
                                <span className='fw-bold' style={{ color: 'red' }}> Author: </span>
                                <span>{post.author}</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span className='fw-bold' style={{ color: 'red' }}> Published: </span>
                                <span>{post.publishedDate}</span>
                            </div>
                            <Card.Text className='mt-2' style={{ color: 'gray', fontStyle: 'italic', paddingTop: '30px' }}>{post.shortDescription}</Card.Text>
                            <Button variant='primary' as={NavLink} to={`/post/${post.id}`} style={{ marginTop: '30px', borderColor: 'black', boxShadow: '0 0 5px black, 0 0 10px gray, 0 0 15px black' }}>
                                Read more
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Posts;
