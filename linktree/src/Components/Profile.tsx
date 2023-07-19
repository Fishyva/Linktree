import asian from "../assets/asian.jpg";
import verfied from "../assets/verfied.svg";

function Profile() {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 pt-10 px-10 w-full ">
        <img
          src={asian}
          alt="asian girl"
          className="rounded-full h-[120px] w-[120px]"
        />
        <div className="flex space-x-1 items-center">
          <h1 className=" font-sora font-medium text-white">@Emma</h1>
          <img src={verfied} alt="verified" className="w-[12px} h-[12px]" />
        </div>
       
         <p className="font-sora text-white font-small tracking-wide text-left">I ONLY respond on OnlyFans… I’m here to help u cum! 💦</p>
       
         
      </div>
    </>
  );
}

export default Profile;
