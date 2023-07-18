import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllPosts } from '../../../redux/postsRedux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './Post.module.scss';

const Post = () => {
    const posts = useSelector(getAllPosts);
    return (
        <Row className='py-4'>
            {posts.map((post) => (
                <Col key={post.id} xs='12' md='6' lg='4' className='mb-4'>
                    <Card className={styles['post-card']}>
                        <Card.Body className={styles['card-body']}>
                            <Card.Title className={styles['card-title']}><strong> {post.title} </strong></Card.Title>
                            <div>
                                <span className={styles['author']}> Author: </span>
                                <span>{post.author}</span>
                            </div>
                            <div>
                                <span className={styles['published']}> Published: </span>
                                <span>{post.publishedDate}</span>
                            </div>
                            <div>
                                <span className={styles['category']}> Category: </span>
                                <span>{post.category}</span>
                            </div>
                            <Card.Text className={`mt-2 ${styles['card-text']}`}>{post.shortDescription}</Card.Text>
                            <Button variant='primary' as={NavLink} to={`/post/${post.id}`} className={styles['read-more-button']}>
                                Read more
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Post;
