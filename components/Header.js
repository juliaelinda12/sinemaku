import react from "react";
import {Carousel} from "react-bootstrap";
import gbr1 from './gbr1.png';
import gbr2 from './gbr2.png';
import gbr3 from './gbr3.png';

const header = () => {
return(
<Carousel variant="dark">
<Carousel.Item>
<img
className="d-block w-100"
src={gbr1}
alt="First slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={gbr2}
alt="Second slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={gbr3}
alt="Third slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
);
}

export default header