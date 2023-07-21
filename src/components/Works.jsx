import { styled } from "styled-components";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container= styled.div`
    width: 1400;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;

const List = styled.ul``;

const ListItem = styled.li``;

const Right = styled.div`
    flex: 1;
`;

const Works = () => {
    return (
    <Section>
        <Container>
            <Left>
                <List>
                    <ListItem></ListItem>
                </List>
            </Left>
            <Right></Right>
        </Container>
    </Section>
    );
};

export default Works;
