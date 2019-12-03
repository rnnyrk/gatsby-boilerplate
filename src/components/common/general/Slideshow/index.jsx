import React from 'react';
import PT from 'prop-types';
import Slider from 'react-slick';

import { Image } from 'common/general';
import { SlideImageContainer } from './styled';

const Slideshow = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 7000,
    swipeToSlide: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <SlideImageContainer key={image.slideshow_image.localFile.childImageSharp.fluid.originalImg}>
          <Image image={image.slideshow_image} />
        </SlideImageContainer>
      ))}
    </Slider>
  );
};

Slideshow.propTypes = {
  images: PT.arrayOf(PT.object),
};

export default Slideshow;
