import React from 'react'


export default function topIndex() {
    const imageUrls = [
        'https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/intro-slide-img01.jpg',
        'https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/intro-slide-img02.jpg',
        'https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/intro-slide-img03.jpg',
        'https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/intro-slide-img04.jpg',
        'https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/intro-slide-img05.jpg',
        'https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/intro-slide-img06.jpg',
      ];
  return (
    <div>
        <div id="contents">
            <div className="intro-sec fade-in">
                <div className="bx-wrapper" style={{maxWidth: '2160' + 'px'}}>
                    <div className="bx-viewport" style={{width: '100%', overflow: 'hidden', position: 'relative', height: '360'+ 'px'}}>
                    <ul className="intro-sec_img-slide" style={{width: '6215%', position: 'relative', transitionDuration: '70s', transitionTimingFunction: 'linear', transform: 'translate3d(-2340px, 0px, 0px)',}}>
                        {imageUrls.map((imageUrl, index) => (
                            <li
                            key={index}
                            style={{
                                float: 'left',
                                listStyle: 'none',
                                position: 'relative',
                                width: '192.5px',
                            }}
                            >
                            <img src={imageUrl} alt="" />
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <p className="intro-sec_link">
                    <a href="/event/">年中行事について</a>
                </p>
            </div>
            <section className="news-sec fadein scrollin">
                <h2 className="news-sec_ttl">お知らせ</h2>
                <ul className="news-sec_list fadein scrollin">
                    <li>
                        <div className="news-sec_list_info">
                            <span className="news-sec_list_date">2023年9月12日</span>
                            <p className="news-sec_list_category"><a href="https://syodorin.org/news_cat/%e8%81%96%e6%97%a5%e3%83%bbyoutube%e6%b3%95%e8%a9%b1/">聖日・YouTube法話</a></p>
                        </div>
                        <a href="https://syodorin.org/news/%e6%9c%ac%e6%97%a59%e6%9c%8812%e6%97%a5%e3%81%af%e3%80%81%e6%97%a5%e8%93%ae%e5%a4%a7%e8%81%96%e4%ba%ba%e3%81%ae%e5%9b%9b%e5%a4%a7%e6%b3%95%e9%9b%a3%e3%81%ae%e4%b8%ad%e3%80%81%e9%be%8d%e5%8f%a3/" className="news-sec_list_ttl">本日9月12日は、日蓮大聖人の四大法難の中、龍口法難の聖日です。</a>
                    </li>
                    <li>
                        <div className="news-sec_list_info">
                            <span className="news-sec_list_date">2023年9月9日</span>
                            <p className="news-sec_list_category"><a href="https://syodorin.org/news_cat/youtube-sermon/">YouTube法話</a></p>
                        </div>
                        <a href="https://syodorin.org/news/%e6%97%a5%e8%93%ae%e8%81%96%e4%ba%ba%e3%83%bb%e6%b3%95%e8%8f%af%e7%b5%8c%e3%81%ab%e5%ad%a6%e3%81%b6%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab%e3%80%80%e6%9c%ac%e6%97%a5youtube%e3%83%81%e3%83%a3-18/" className="news-sec_list_ttl">日蓮聖人・法華経に学ぶチャンネル　本日YouTubeチャンネルに法話をアップしました。</a>
                    </li>
                    <li>
                        <div className="news-sec_list_info">
                            <span className="news-sec_list_date">2023年9月1日</span>
                            <p className="news-sec_list_category"><a href="https://syodorin.org/news_cat/youtube-sermon/">YouTube法話</a></p>
                        </div>
                        <a href="https://syodorin.org/news/%e6%97%a5%e8%93%ae%e8%81%96%e4%ba%ba%e3%83%bb%e6%b3%95%e8%8f%af%e7%b5%8c%e3%81%ab%e5%ad%a6%e3%81%b6%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab%e3%80%80%e6%9c%ac%e6%97%a5youtube%e3%83%81%e3%83%a3-17/" className="news-sec_list_ttl">日蓮聖人・法華経に学ぶチャンネル　本日YouTubeチャンネルに法話をアップしました。</a>
                    </li>
                    <li>
                        <div className="news-sec_list_info">
                            <span className="news-sec_list_date">2023年8月27日</span>
                            <p className="news-sec_list_category"><a href="https://syodorin.org/news_cat/%e8%81%96%e6%97%a5%e3%83%bbyoutube%e6%b3%95%e8%a9%b1/">聖日・YouTube法話</a></p>
                        </div>
                        <a href="https://syodorin.org/news/%e6%9c%ac%e6%97%a5%ef%bc%98%e6%9c%8827%e6%97%a5%e3%81%af%e3%80%81%e6%97%a5%e8%93%ae%e5%a4%a7%e8%81%96%e4%ba%ba%e3%81%ae%e5%9b%9b%e5%a4%a7%e6%b3%95%e9%9b%a3%e3%81%ae%e4%b8%ad%e3%80%81%e6%9d%be%e8%91%89/" className="news-sec_list_ttl">本日８月27日は、日蓮大聖人の四大法難の中、松葉ヶ谷草庵焼き打ちの御法難の聖日です。</a>
                    </li>
                    <li>
                        <div className="news-sec_list_info">
                            <span className="news-sec_list_date">2023年8月26日</span>
                            <p className="news-sec_list_category"><a href="https://syodorin.org/news_cat/youtube-sermon/">YouTube法話</a></p>
                        </div>
                        <a href="https://syodorin.org/news/%e6%97%a5%e8%93%ae%e8%81%96%e4%ba%ba%e3%83%bb%e6%b3%95%e8%8f%af%e7%b5%8c%e3%81%ab%e5%ad%a6%e3%81%b6%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab%e3%80%80%e6%9c%ac%e6%97%a5youtube%e3%83%81%e3%83%a3-16/" className="news-sec_list_ttl">日蓮聖人・法華経に学ぶチャンネル　本日YouTubeチャンネルに法話をアップしました。</a>
                    </li>                   
                </ul>
            </section>
            <section className="about-sec">
                <div className="about-sec_inner">
                    <div className="about-sec_inner-in fadein scrollin">
                        <h2 className="about-sec_ttl fadein scrollin"><span>行覚寺について</span></h2>
                        <p className="about-sec_lead fadein scrollin">長屋の一角に小さな庵を結ぶお寺、それが妙照山 行覚寺です。<br />仏教によって、世の人々の苦悩の解決に役立つ人が、<br />一人、十人、百人と林のように生い立つことを祈り、<br />本堂を唱導林と命名しました。</p>
                    </div>
                </div>
                <p className="about-sec_link">
                    <a href="/about/" className="sec-link">お寺について</a>
                </p>
            </section>

            <div className="net-service-sec">
                <ul className="net-service-sec_list fadein scrollin">
                    <li className="net-service01 fadein scrollin">
                        <section>
                            <h3 className="net-service-sec_ttl"><span>ねっとで</span>法事</h3>
                            <p className="net-service-sec_icon">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/service-icon-01.svg" alt="ねっとで法事" />
                            </p>
                            <p className="net-service-sec_lead">インターネット中継により、ご自宅や遠隔地から、ご法事を勤めることが可能となりました。</p>
                            <p className="net-service-sec_link">
                                <a href="/net-houji/" className="sec-link">ねっとで法事</a>
                            </p>
                        </section>
                    </li>

                    <li className="net-service02 fadein scrollin">
                        <section>
                            <h3 className="net-service-sec_ttl"><span>ねっとで</span>年中行事</h3>
                            <p className="net-service-sec_icon">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/service-icon-02.svg" alt="ねっとで年中行事" />
                            </p>
                            <p className="net-service-sec_lead">インターネット中継により、ご自宅や遠隔地において、年中行事にご参拝いただけます。行事内容については<a href="/event/">こちら</a>をご確認ください。</p>
                            <p className="net-service-sec_link">
                                <a href="/net-event/" className="sec-link">ねっとで年中行事</a>
                            </p>
                        </section>
                    </li>

                    <li className="net-service03 fadein scrollin">
                        <section>
                            <h3 className="net-service-sec_ttl"><span>ねっとで</span>法話</h3>
                            <p className="net-service-sec_icon">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/service-icon-03.svg" alt="ねっとで法話" />
                            </p>
                            <p className="net-service-sec_lead"><a href="https://www.youtube.com/@user-wi8zs7lh3u" target="_blank">YouTube</a>により、ご自宅や遠隔地で、法話をご視聴いただけます。毎月２回、法華経を中心に「仏教講座」を開講しております。</p>
                            <p className="net-service-sec_link">
                                <a href="/net-sermon/" className="sec-link">ねっとで法話</a>
                            </p>
                        </section>
                    </li>
                </ul>
            </div>

            <div className="pickup-service-sec">
                <div className="pickup-service-sec_list fadein scrollin">

                    <a href="/event/" className="pickup01 fadein scrollin">
                        <section>
                            <p className="pickup-service-sec_img">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/pickup-bnr-img01.jpg" alt="年中行事" />
                            </p>
                            <div className="pickup-service-sec_text-box">
                                <h2 className="pickup-service-sec_ttl">年中行事</h2>
                                <p className="pickup-service-sec_lead">四季を通じ、暮らしの中で仏陀の教えに目覚め、人生を模索し、自己の原点に回帰する。</p>
                            </div>
                        </section>
                    </a>

                    <a href="/faith/" className="pickup02 fadein scrollin">
                        <section>
                            <p className="pickup-service-sec_img">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/pickup-bnr-img02.jpg" alt="信仰" />
                                <span className="pickup-service-sec_caption">木造日蓮聖人坐像 東京 長栄山 本門寺所蔵</span>
                            </p>
                            <div className="pickup-service-sec_text-box">
                                <h2 className="pickup-service-sec_ttl">信仰</h2>
                                <p className="pickup-service-sec_lead">仏陀に通じ、現状認識・原因究明・理想設定・方策実践という４種のカテゴリーによって、人生を志向する。</p>
                            </div>
                        
                        </section>
                    </a>

                    <a href="/nhk-lecture/" className="pickup03 fadein scrollin">
                        <section>
                            <p className="pickup-service-sec_img">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/pickup-bnr-img03.jpg" alt="NHK講義" />
                            </p>
                            <div className="pickup-service-sec_text-box">
                                <h2 className="pickup-service-sec_ttl">NHK講義</h2>
                                <p className="pickup-service-sec_lead">古来より、仏教文化圏、取り分け日本の政治・経済・文化・芸術の多岐にわたり、多大な影
            響を与えてきた諸経の王、法華経に学ぶ。</p>
                            </div>
                        </section>
                    </a>

                    <a href="/sermon/" className="pickup04 fadein scrollin">
                        <section>
                            <p className="pickup-service-sec_img">
                                <img src="https://syodorin.org/wp/wp-content/themes/gyokakuji/assets/images/top/pickup-bnr-img04.jpg" alt="法話" />
                                <span className="pickup-service-sec_caption">法華経八巻　奈良国立博物館所蔵<br />（画像提供 奈良国立博物館 撮影 佐々木香輔）</span>
                            </p>
                            <div className="pickup-service-sec_text-box">
                                <h2 className="pickup-service-sec_ttl">法話</h2>
                                <p className="pickup-service-sec_lead">仏陀の知見、法華経から人類不変の行動原理を知り、個と社会の諸問題を考察する。</p>
                            </div>
                        </section>
                    </a>
                </div>
            </div>
            <section className="qa-sec fadein scrollin">
                <h2 className="qa-sec_ttl">よくあるご質問</h2>
                <ul className="qa-sec_list fadein scrollin">
                    <li className="fadein scrollin">
                        <p className="qa-sec_list_question">ねっとで法事、ねっとで年中行事は、宗教や宗派を問わず受け付けていますか？</p>
                    <div className="qa-sec_list_answer">
                            <p>どのような宗教、宗派にかかわらず受け付けております。<br />ただし、久遠のお釈迦さまの救済の世界を表す大曼荼羅御本尊の御前において、法華経を読み、法華経の肝心、南無妙法蓮華経の題目をお唱えし、ご供養致します。</p>
                        </div>
                    </li>
                    <li className="fadein scrollin">
                        <p className="qa-sec_list_question">ねっとで法事、ねっとで年中行事は申込者以外の人でも参拝できますか？</p>
                        <div className="qa-sec_list_answer">
                            <p>お問い合わせの条件で、ご先祖のご法事や年中行事の法要をご参拝頂けます。<br />ご法事はお申し込みされた方に限り特定のURLをお知らせし、中継の参拝が可能となりますが、URLを他の方にお知らせいただくことにより、複数の方が同時に参拝することが可能となります。ただし、申込者はプライバシーにお気を付け下さい。年中行事は一般公開で中継しております。</p>
                            <p className="sup-text">※ねっとで年中行事は、盂蘭盆会・春秋彼岸会は卒塔婆供養等で、申込者のお名前（施主名）やご先祖、そして戒名を読み上げますので、これらについては、プライバシーの確保は困難ですのでご留意下さい。</p>
                        </div>
                    </li>
                    <li className="fadein scrollin">
                        <p className="qa-sec_list_question">法事とはどの時期にするものですか？</p>
                        <div className="qa-sec_list_answer">
                            <p>ご命日の当日までにお勤めすることが望ましいとされています。<br />それは、ご命日の前や当日までにご先祖に功徳を捧げ、年忌の当日を迎えることに始まっております。一方では多くの功徳を捧げることが、ご法事の本義であることも忘れてはなりません。その為には少しでも多くの方に、ご参拝していただくことが大切です。</p>
                        </div>
                    </li>
                    <li className="fadein scrollin">
                        <p className="qa-sec_list_question">「ペット」の供養をしたいのですが、ねっとで法事、ねっとで年中行事で供養はできますか？</p>
                        <div className="qa-sec_list_answer">
                            <p>ねっとで法事、年中行事共に、お問い合わせの条件でお勤めすることはできます。<br />お釈迦さまは、生きとし生けるものを救済する為に、法華経の御教えをお説きになられました。<br />お釈迦さまの大慈悲に抱かれる機会を授かったペットは、さぞかし幸せなことでしょう。</p>
                        </div>
                    </li>
                    <li className="fadein scrollin">
                        <p className="qa-sec_list_question">将来、行覚寺の檀家になることはできますか？</p>
                        <div className="qa-sec_list_answer">
                            <p>入檀していただくことはできますが、詳しいことはお電話にてご相談下さい。</p>
                        </div>
                    </li>
                </ul>
                <p className="qa-sec_link fadein scrollin">
                    <a href="/qa/" className="sec-link">よくあるご質問</a>
                </p>
            </section>
        </div>
    </div>
  )
}
