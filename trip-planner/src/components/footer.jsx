import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tripster</h1>
          <p>Make your travel plans a reality.</p>
        </div>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100068803410890" target="blank">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://www.instagram.com/tauseef_h4q/" target="blank">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://in.pinterest.com/not_Tauseef/" target="blank">
            <i class="fa-brands fa-square-pinterest"></i>
          </a>
          <a href="https://x.com/Not_Tauseef_haq" target="blank">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">ChangeLog</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Projects</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms of service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Copyrights</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
