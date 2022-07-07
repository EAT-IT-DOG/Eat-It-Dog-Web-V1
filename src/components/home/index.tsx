import {
  HomeContainer,
  HomePanel,
  HomePanelImage,
  HomePanelSubTitle,
  HomePanelTextWrap,
  HomePanelTitle,
} from "./style";
import HomePanelDogImage from "../../assets/images/home/homePanelDog.svg";

const Home = () => {
  return (
    <HomeContainer>
      <HomePanel>
        <HomePanelTextWrap>
          <HomePanelTitle>먹어보시개</HomePanelTitle>
          <HomePanelSubTitle>
            세상의 모든 좋은 음식이 반려견에게 닿을 때까지
          </HomePanelSubTitle>
        </HomePanelTextWrap>
        <HomePanelImage src={HomePanelDogImage} />
      </HomePanel>
    </HomeContainer>
  );
};

export default Home;
