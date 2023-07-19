import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../redux/categoriesRedux';
import { Row } from 'react-bootstrap';
import Post from './Post/Post';

const SingleCategory = () => {
  const { category } = useParams();
  const categoriesData = useSelector(state => getPostsByCategory(state, category));
  if (!categoriesData || categoriesData.length === 0) {
    return <p style={{ color: 'blue', fontSize: '20px' }}><strong> No posts found! </strong></p>;
  }

  return (
    <Row className="justify-content-between">
      <Post posts={categoriesData} />
    </Row>
  );
};

export default SingleCategory;
