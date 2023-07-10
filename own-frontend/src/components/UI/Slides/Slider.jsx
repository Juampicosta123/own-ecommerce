import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const sliderData = [
  {
    id: 0,
    image:
      'https://images.fravega.com/f300/61620bb7079e9303202fabcdb4deb347.png'
  },
  {
    id: 1,
    image:
      'https://images.fravega.com/f300/426732bd3bd0d45250fe1b85ae00bdd7.jpg'
  }
];

export default function Slider() {
  return (
    <Slide scale={0.4}>
      {sliderData.map((slide) => (
        <div key={slide.id}>
          <img style={{ width: '100%' }} src={slide.image} />
        </div>
      ))}
    </Slide>
  );
}
