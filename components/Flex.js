import img1 from './Assets/1.jpg';
import img2 from './Assets/2.jpg';
import img3 from './Assets/3.jpg';


const Flex = () => {
    return(
        <div class = "flex-container">
            <div ><img src={img1} width={200} /></div> 
            <div><img src={img2} width={200}/></div>
            <div> <img src={img3} width={200}/></div>
            </div>
    );
};

export default Flex;
