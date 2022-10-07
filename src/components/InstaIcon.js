import styled from 'styled-components'
import {Instagram} from '@styled-icons/boxicons-logos/'
import {FacebookCircle} from '@styled-icons/boxicons-logos/'
import {LinkedinWithCircle} from '@styled-icons/entypo-social/'


const InstaIcon = styled(Instagram)`
    width: 30px;
    cursor: pointer;
    padding: 0em 1em;
    transition: 0.3s;

    :hover{
        transform: scale(1.1);
    }

`

const FaceIcon = styled(FacebookCircle)`
    width: 30px;
    cursor: pointer;
    padding: 0em 1em;
    transition: 0.3s;

    :hover{
        transform: scale(1.1);
}

`

const LinkedinIcon = styled(LinkedinWithCircle)`
    width: 30px;
    cursor: pointer;
    padding: 0em 1em; 
    transition: 0.3s;

        :hover{
            transform: scale(1.1);
}

`

export {InstaIcon, FaceIcon, LinkedinIcon}
