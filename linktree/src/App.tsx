import insta from "./assets/insta.svg";
import twitter from "./assets/twitter.svg";
import Link from "./Components/Link";
import Profile from "./Components/Profile";
import onlyf from "./assets/onlyf.svg";

function App() {
  return (
    <>
      <div className="flex   w-screen h-screen justify-center ">
        <div className="flex flex-col items-center space-y-20 pt-5">
          <Profile />
          <div className="flex items-center flex-col justify-center w-screen space-y-10 ">
            <Link
              icon={onlyf}
              text="Free OnlyFans"
              url="https://onlyfans.com/sophbunni"
            />

            <Link
              icon={insta}
              text="Instagram"
              url="https://onlyfans.com/sophbunni"
            />
            <Link
              icon={twitter}
              text="Twitter"
              url="https://onlyfans.com/sophbunni"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
