import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faSpinner,
    faDice,
    faDiceTwo,
    faDiceOne,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix

} from "@fortawesome/free-solid-svg-icons";

const Icon = {
    spinner: <FontAwesomeIcon icon={faSpinner} className="animate-spin" />,
    dice: <FontAwesomeIcon icon={faDice} />,
    dice1: <FontAwesomeIcon icon={faDiceOne} />,
    dice2: <FontAwesomeIcon icon={faDiceTwo} />,
    dice3: <FontAwesomeIcon icon={faDiceThree} />,
    dice4: <FontAwesomeIcon icon={faDiceFour} />,
    dice5: <FontAwesomeIcon icon={faDiceFive} />,
    dice6: <FontAwesomeIcon icon={faDiceSix} />
}

export default Icon;