import React from 'react'
import PropTypes from 'prop-types'

function ModelDetails(props) {
    return (
        <div>
        <ul>
        <li>Name: Ivel Z3</li>
        <li>Manufacturer: Ivasim</li>
        <li>Year: 1969</li>
        <li>Origin: Croatia</li>
        </ul> 
        <ul>
        <li>Name: Bally Astrocade</li>
        <li>Manufacturer: Bally Consumer Products</li>
        <li>Year: 1977</li>
        <li>Origin: USA</li>
        </ul> 
        <ul>
        <li>Name: Sord M200 Smart Home Computer</li>
        <li>Manufacturer: Sord Computer Corporation</li>
        <li>Year: 1971</li>
        <li>Origin: Japan</li>
        </ul> 
        <ul>
        <li>Name: Commodore 64</li>
        <li>Manufacturer: Commodore</li>
        <li>Year: 1982</li>
        <li>Origin: USA</li>
        </ul> 
        </div>
    )
}

ModelDetails.propTypes = { name, manufacturer, year, origin }

export default ModelDetails

