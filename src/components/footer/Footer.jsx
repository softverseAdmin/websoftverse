import React from "react";
import './Footer.css';
import twitter from "../../assets/images/icons8-twitter-100.png";
import youtube from "../../assets/images/icon-youtube.png";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer_cta-sec">
          <div className="footer_cta-sec-inner">
            <section className="footer_contact-area">
              <h2 className="footer_contact-area_ttl">お問い合わせ</h2>
              <div className="footer_contact-area_tel">
                <p className="tel-num">06-6621-4930</p>
                <p className="open-hours">応対可能な時間　15:00 - 21:00</p>
              </div>
              <p className="footer_contact-area_btn">
                <a href="/contact/">フォームからお問い合わせ</a>
              </p>
            </section>
            <section className="footer_application-area">
              <h2 className="footer_contact-area_ttl">
                ネットからのお申し込み
              </h2>
              <p className="footer_contact-area_btn">
                <a href="/houji-form/">ねっとで法事のお申し込み</a>
                <a href="/event-form/">ねっとで年中行事のお申し込み</a>
              </p>
            </section>
          </div>
        </div>

        <div className="footer-inner">
          <a href="#header" className="page-top">
            {" "}
          </a>
          <ul className="footer-gnav">
            <li className="fnav01">
              <a href="/">ホーム</a>
            </li>
            <li className="fnav02">
              <a href="/about/">お寺について</a>
            </li>
            <li className="fnav03">
              <a href="/faith/">信仰</a>
            </li>
            <li className="fnav04">
              <a href="/event/">年中行事</a>
            </li>
            <li className="fnav05">
              <a href="/sermon/">法話</a>
            </li>
            <li className="fnav06">
              <a href="/nhk-lecture/">NHK講義</a>
            </li>
            <li className="fnav07">
              <a href="/qa/">よくあるご質問</a>
            </li>
            <li className="fnav08">
              <a href="/access/">アクセス</a>
            </li>
            <li className="fnav09">
              <a href="/news/">お知らせ</a>
            </li>
            <li className="fnav10">
              <a href="/net-event/">ねっとで年中行事</a>
            </li>
            <li className="fnav11">
              <a href="/net-houji/">ねっとで法事</a>
            </li>
            <li className="fnav12">
              <a href="/net-sermon/">ねっとで法話</a>
            </li>
          </ul>
          <ul className="footer_sns-link">
            <li className="sns-twitter">
              <a href="https://twitter.com/syodorin">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li className="sns-youtube">
              <a href="https://www.youtube.com/@user-wi8zs7lh3u">
                <img src={youtube} alt="YouTube" />
              </a>
            </li>
          </ul>

          <div className="footer_bnr-link_wrapper">
            <p className="footer_bnr-link">
              <a href="/zou/">
                <img
                  src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/common/footer-zou-banner.png "
                  alt="蔵 zou"
                />
              </a>
            </p>
          </div>

          <div className="footer_logo-area">
            <a href="/" className="footer_logo">
              <img
                src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/common/footer-logo.svg"
                alt="唱導林 - 日蓮宗 行覚寺"
              />
            </a>
            <p className="footer_address">
              〒545-0021
              <br />
              大阪府大阪市阿倍野区阪南町1-41-20
            </p>
            <p className="footer-tel">TEL : 06-6621-4930</p>

            <ul className="footer_logo-area_link-list">
              <li className="snav01">
                <a href="/privacy/">プライバシーポリシー</a>
              </li>
              <li className="snav02">
                <a href="/terms/">特定商取引法に基づく表記</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer_copyright">
          <small>© 2023 Gyokakuji.</small>
        </p>
      </footer>
    </>
  );
}
