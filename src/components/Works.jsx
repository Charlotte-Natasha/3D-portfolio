import { styled, keyframes } from "styled-components";

const data = [
    "Books",
    "Perfume",
    "Flowers",
    "A job",
    "Surprise me"
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container= styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const moveText = keyframes`
    to {
        width: 100%;
    }
`;

const ListItem = styled.li`
    font-size: 90px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    position: relative;

    &::after {
        content: ${(props) => `"${props.text}"`};
        position: absolute;
        top: 0;
        left: 0;
        color: #631636;
        width: 0;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover::after {
        animation: ${moveText} 0.5s linear both;
    }
`;


const Right = styled.div`
    flex: 1;
`;

const Works = () => {
    return (
        <Section>
            <Container>
            <Left>
                <List>
                {data.map((item) => (
                    <ListItem key={item} text={item}>
                        {item}
                    </ListItem>
                ))}
                </List>
            </Left>
            <Right></Right>
            </Container>
        </Section>
    );
};

export default Works;
