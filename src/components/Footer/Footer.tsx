const Footer = () => {
  return (
    <div className="w-full flex items-center bg-amber-400 justify-center p-4 text-center">
      <div className="w-[1300px] flex items-center justify-between">
        <div>
          <h1>© 2025 PixelDB. All pixel rights reserved.</h1>
        </div>

        <div className="space-x-5">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Imprint</a>
          <a href="https://github.com/pixel-db">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
