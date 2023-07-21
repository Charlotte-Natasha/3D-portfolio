import { styled } from "styled-components"
import { Search } from "@styled-icons/bootstrap/Search";

const Section = styled.div `
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 150px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const StyledSearch = styled(Search)`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #631636;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
            <Links>
                <Logo src="./img/3.png" />
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Presents</ListItem>
                <ListItem>Birthday Messages</ListItem>
                </List>
            </Links>
            <Icons>
                <StyledSearch/>
                <Button>Go Crazy</Button>
            </Icons>
            </Container>
        </Section>
    );
}

export default Navbar
