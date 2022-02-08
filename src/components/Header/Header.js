import Container from "../Container";
import { HeaderSection } from "./styles";
import Logo from "../Logo";

const Header = () => {
    return (
        <HeaderSection>
            <Container>
                <Logo
                />
            </Container>
        </HeaderSection>
    );
}

export default Header;