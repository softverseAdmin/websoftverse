// import React from 'react'
import "./Menu.css";

export default function Menu() {
    
    function toggleMenu(e) {
        e.target.classList.toggle("active");
        const slideMenu = document.getElementById("slide-menu");
        slideMenu.classList.toggle("open");
    }

    return (



        <div>
            <nav className="header-nav">

                <div className="slide-menu_btn">
                    <a className="menu-trigger" href="#" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <div id="slide-menu" className="slide-menu_nav">

                    <div className="slide-menu_nav-inner-wrap">

                        <div className="slide-menu_nav-inner">

                            <ul className="gnav-main_sp">
                                <li className="gnav01">
                                    <a href="/">ホーム</a>
                                </li>
                                <li className="gnav02">
                                    <a href="#!">よくあるご質問</a>
                                </li>
                                <li className="gnav03">
                                    <a href="#!">お寺について</a>
                                </li>
                                <li className="gnav04">
                                    <a href="#!">アクセス</a>
                                </li>
                                <li className="gnav05">
                                    <a href="#!">信仰</a>
                                </li>
                                <li className="gnav06">
                                    <a href="/#!">ねっとで年中行事</a>
                                </li>
                                <li className="gnav07">
                                    <a href="#!">年中行事</a>
                                </li>
                                <li className="gnav08">
                                    <a href="#!">ねっとで法事</a>
                                </li>
                                <li className="gnav09">
                                    <a href="#!">法話</a>
                                </li>
                                <li className="gnav10">
                                    <a href="#!">ねっとで法話</a>
                                </li>
                                <li className="gnav11">
                                    <a href="#!">NHK講義</a>
                                </li>
                                <li className="gnav12">
                                    <a href="#!">お知らせ</a>
                                </li>
                            </ul>

                            <ul className="gnav-main_pc">
                                <li className="gnav01">
                                    <a href="/">ホーム</a>
                                </li>
                                <li className="gnav02">
                                    <a href="#!">法話</a>
                                </li>
                                <li className="gnav03">
                                    <a href="#!">ねっとで年中行事</a>
                                </li>
                                <li className="gnav04">
                                    <a href="#!">お寺について</a>
                                </li>
                                <li className="gnav05">
                                    <a href="#!">NHK講義</a>
                                </li>
                                <li className="gnav06">
                                    <a href="#!">ねっとで法事</a>
                                </li>
                                <li className="gnav07">
                                    <a href="#!">信仰</a>
                                </li>
                                <li className="gnav08">
                                    <a href="#!">よくあるご質問</a>
                                </li>
                                <li className="gnav09">
                                    <a href="#!">ねっとで法話</a>
                                </li>
                                <li className="gnav10">
                                    <a href="#!">年中行事</a>
                                </li>
                                <li className="gnav11">
                                    <a href="#!">アクセス</a>
                                </li>
                                <li className="gnav12">
                                    <a href="#!">お知らせ</a>
                                </li>
                            </ul>

                            <ul className="gnav-form">
                                <li className="form-nav01"><a href="#!">お問い合わせ</a></li>
                                <li className="form-nav02"><a href="#!">ねっとで年中行事のお申し込み</a></li>
                                <li className="form-nav03"><a href="#!">ねっとで法事のお申し込み</a></li>
                            </ul>

                        </div>

                        <ul className="gnav-sub">
                            <li className="snav01"><a href="#!">プライバシーポリシー</a></li>
                            <li className="snav02"><a href="#!">特定商取引法に基づく表記</a></li>
                        </ul>

                        <ul class="gnav-sns">
							<li class="sns-twitter"><a href="#!" target="_blank"><img class="gnav-icon" src="/twitter.png" alt="Twitter" /></a></li>
							<li class="sns-youtube"><a href="#!" target="_blank"><img class="gnav-icon" src="/youtube.png" alt="YouTube" /></a></li>
						</ul>

                    </div>

                </div>

            </nav>
        </div>
    )
}
