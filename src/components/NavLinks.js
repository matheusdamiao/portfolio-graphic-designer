import styled from "styled-components";

const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding-left: 50px;
    transition: 2s;

    @media screen and (max-width: 768px) {
        gap: 1.5rem;
        padding-left: 15px;
    }
`

export default NavLinks