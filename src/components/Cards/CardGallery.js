import AwesomeSlider from 'react-awesome-slider';
import SliderStyles from '../styles/slider.styled';
import styled from 'styled-components';

const CardGalleryContainer = styled.div`
  width: 100%;
  font-size: 0;
`;

const CardImg = styled.div`
  background-position: 50%;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function CardGallery(props) {
  const imageList = [];
  const { images } = props;
  if (images) {
    for (const [, value] of Object.entries(images)) {
      imageList.push(value);
    }
  }

  return (
    <CardGalleryContainer>
      <AwesomeSlider cssModule={SliderStyles}>
        {imageList.map((img) => {
          return <CardImg data-src={img.image} key={img.id} />;
        })}
      </AwesomeSlider>
      <h2>Image wasn&apost found</h2>
    </CardGalleryContainer>
  );
}

export default CardGallery;
