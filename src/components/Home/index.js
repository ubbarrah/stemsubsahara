import Button from './Button'
import laptop from '../../assets/images/blackmanlaptop.jpg'
import Bottombar from '../Bottombar'

const Home = () => {

    return (
        <div className="container home-page">
            <p>Mission: Our mission is to provide free STEM resources to the neediest of kids, ages 7-14 in rural communities in sub-Saharan Africa so that they can thrive in science, 
                technology, engineering and math and make impacts in their communities for long term development and lasting change in the region.</p>
            <p>Motto: Advance in STEM even if there is no internet. Our goal is to provide a mobile device in the hand of every needy kid who needs one for STEM resources and education in subSaharan Africa.
            </p>

            <div className="picture"L>
                <img src={laptop} alt="laptop"></img>
            </div>
            <Button />
            <Bottombar />
        </div>
    );
};

export default Home;