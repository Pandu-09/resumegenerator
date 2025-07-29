import './PreviewPage.css'
import image1 from '../assets/image.jpeg'
import image2 from '../assets/image.jpeg'
import image3 from '../assets/image.jpeg'

import { useNavigate } from 'react-router-dom'

function Preview() {
    const navigate = useNavigate();
    const templatesArray = [
        {name: "Classic", image: image1, path: 1},
        {name: "Pro", image: image2, path: 2},
        {name: "Advanced", image: image3, path: 3},
    ];
    
    return (
        <div className='card-container'>
            {templatesArray.map((item, index) => {
                return (
                    <div className='card' onClick={() => navigate(`/preview/${item.path}`)}>
                        <img src={item.image} width="80%" height="80%" alt="" />
                        <h3>{item.name}</h3>
                    </div>
                );
            })}
        </div>
    );
}
export default Preview