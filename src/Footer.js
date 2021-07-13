const Footer = () => {
  return (
    <footer id="contact" className="footer mt-auto py-3 border-top">
      <div className="row pt-2">
        <div className="col-6">
          <p className="copyright-statement text-center ms-4 pt-3">
            Copyright © Matej Palenik - 2021
          </p>
        </div>
        <div className="col-6 text-center">
          <a
            href="https://github.com/glemin5011"
            class="btn btn-default btn-lg my-2 my-xl-0 ms-sm-2 ms-xl-5"
            id="github-button"
          >
            <i class="fab fa-github"></i>
            <span class="social-media-name  ms-1">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matejpalenik/"
            class="btn btn-default btn-lg  my-2 my-xl-0 ms-sm-2 ms-xl-5"
            id="linkedin-button"
          >
            <i class="fab fa-linkedin"></i>
            <span class="social-media-name ms-1">Linkedin</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
