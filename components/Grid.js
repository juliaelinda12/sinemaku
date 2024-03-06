import img1 from './Assets/1.jpg';
import img2 from './Assets/2.jpg';
import img3 from './Assets/3.jpg';
import img4 from './Assets/4.jpg';
import img5 from './Assets/5.jpg';

const Grid = () => {
    return(
        <div class = "grid-container">
            <div ><img src={img1} width={200} /></div> 
            <div><img src={img2} width={200}/></div>
            <div> <img src={img3} width={200}/></div>
            <div><img src={img4} width={200}/> </div>
            <div><img src={img5} width={200}/> </div>
        </div>
    );
};

export default Grid;