import { Review } from '../../types/review';
import { ReactComponent as Star } from '../../../src/assets/images/star.svg';

import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="review-container">
      {reviews.map((reviewItem) => (
        <div key={reviewItem.id} className="review-div">
          <div className="review-username">
           <Star /> 
            <h4>{reviewItem.user.name}</h4>
          </div>
          <div className="review-comment">
            <p>{reviewItem.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReviewListing;
