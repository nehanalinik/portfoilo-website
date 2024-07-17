import React from "react";
import { ReviewDetails } from "../helper/ProjectDetails";

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__contents">
        <div className="heading">
          <h3>Reviews</h3>
        </div>
        <div className="reviews__contents-container">
          {ReviewDetails.map((item, index) => (
            <div className="reviews__contents-container-data" key={index}>
              <div className="top">
                <div className="reviewFor">{item.reviewFor}</div>
                <div className="review-data">{item.reviewContents}</div>
              </div>
              <div className="bottom">
                <div>
                  <div className="review-name">{item.name}</div>
                  <div className="review-position">{item.designation}</div>
                </div>
                <div className="review-link">
                  <a
                    href={item?.reviewLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.source}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='reviews-bg-text'>my reviews</div>
      </div>
    </section>
  );
};

export default Reviews;
