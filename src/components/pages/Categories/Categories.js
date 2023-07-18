import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';

const Categories = () => {
  const categories = useSelector(getAllCategories)
  return (
    <div className={`${styles['categories-container']} m-auto`}>
      <h1 className={styles['categories-title']}><strong> Categories </strong></h1>
      {categories.map((category) => (
        <ListGroup.Item key={category} className={styles['category-item']}>
          <Link to={'/categories/' + category} className={styles['link-style']}>{category}</Link>
        </ListGroup.Item>
      ))}
    </div>
  );
};

export default Categories;
