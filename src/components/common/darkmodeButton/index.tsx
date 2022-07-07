import { useRecoilValue } from "recoil";
import { ETheme } from "../../../enum/theme/theme.enum";
import useTheme from "../../../hooks/theme/useTheme";
import { themeModeAtom } from "../../../store/theme/themeStore";
import { DarkmodeButtonContainer, DarkmodeButtonIcon } from "./style";
import { BiMoon } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";

const DarkmodeButton = () => {
  const currentTheme = useRecoilValue<ETheme>(themeModeAtom);
  const { handleTheme } = useTheme();

  return (
    <DarkmodeButtonContainer onClick={handleTheme}>
      <DarkmodeButtonIcon>
        {currentTheme === ETheme.LIGHT ? <HiOutlineSun /> : <BiMoon />}
      </DarkmodeButtonIcon>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
