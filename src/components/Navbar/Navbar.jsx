import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarItem from './NavbarItem/NavbarItem';
import './Navbar.css';

const Navbar = ({handleSetIndexColor}) => {

    const [navPlanet, setnavPlanet] = useState([]);

    useEffect(() => {
        axios
            .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
            .then((res) => setnavPlanet(res.data.bodies));
    }, []);

    return (
        <div className="navbar">
            {navPlanet &&
            navPlanet
                .filter((object) => object.bodyType === 'Star' || object.bodyType === 'Planet')
                .map((planet, index) => <NavbarItem key={planet.id} navPlanet={planet} index={index} handleSetIndexColor={handleSetIndexColor} />)}
        </div>
    );
};

export default Navbar;
