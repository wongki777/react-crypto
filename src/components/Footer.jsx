import React from "react";
export default function Footer() {
  return (
      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">CRYPTOX</h1>

    <h2>Contact</h2>

    <address>
    123 Maple Street
    Springfield,
    United States

      <a class="footer__btn" href="mailto:example@gmail.com">Subscribe</a>
    </address>
  </div>

  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">About Us</h2>

      <ul class="nav__ul">
        <li>
        <p>Blog</p>
        </li>

        <li>
        <p>What We Do</p>
        </li>

        <li>
        <p>Our Team</p>
        </li>
      </ul>
    </li>

    <li class="nav__item">
      <h2 class="nav__title">Services</h2>

      <ul class="nav__ul">
        <li>
          <p>Gold Tier</p>
        </li>

        <li>
        <p>Silver Tier</p>
        </li>

        <li>
        <p>Bronze Tier</p>
        </li>


      </ul>
    </li>

    <li class="nav__item">
      <h2 class="nav__title">Links</h2>

      <ul class="nav__ul">
        <li>
        <p>What is ICO</p>
        </li>

        <li>
        <p>Tokens</p>
        </li>

        <li>
        <p>Roadmaps</p>
        </li>
      </ul>
    </li>


    <li class="nav__item">
      <h2 class="nav__title">Help</h2>

      <ul class="nav__ul">
        <li>
        <p>Cookies</p>
        </li>

        <li>
        <p>Help Center</p>
        </li>

        <li>
        <p>Privacy Policy</p>
        </li>
      </ul>
    </li>
  </ul>

  <div class="legal">
    <p>&copy; 2024 CryptoX Blockhain Website</p>

    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> by Olivia Wong</span>
    </div>
  </div>
</footer>
  );
}
