

interface Props {
  text: string;
  icon: string;
  url: string;
}

function Link(props: Props) {
  const { text, icon, url } = props;

  return (
    <>
      <a
        href={url}
        className=" h-16 w-5/6 md:w-1/3 border-2 border-white rounded-full shadow-lg font-sora text-white font-light text-md justify-start px-6 py-4 hover:scale-105 duration-700"
      >
        <div className="flex space-x-6 items-center align-middle">
          <img src={icon} className="h-[30px] w-[30px]" />
          <h1>{text}</h1>
        </div>
      </a>
    </>
  );
}

export default Link;
