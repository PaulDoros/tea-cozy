const MainPage = () => (
    <>
        <div className='id="outer-container"'>

            <main id="page-wrap">
                <div className="image1">
                    <img src="/images/img-mission-background.jpg" alt="mission bg" />
                    <div className="header text-xl">
                        <h2 className="">Our mission</h2>
                        <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
                    </div>
                </div>

                <div className="image2">
                    <div className="image2-text">
                        <h2>Tea of the Month</h2>
                        <h4>What's Steeping at The Tea Cozy</h4>
                    </div>
                    <div className="image2-image">
                        <div>
                            <img src="/images/img-berryblitz.jpg" alt="berryblitz" />
                            <p>Fall Berry Blitz Tea</p>
                        </div>
                        <div>
                            <img src="/images/img-spiced-rum.jpg" alt="spiced-rum" />
                            <p>Spiced Rum Tea</p>
                        </div>
                        <div>
                            <img src="/images/img-donut.jpg" alt="donut" />
                            <p>Sezonal Donut </p>
                        </div>
                        <div>
                            <img src="/images/img-myrtle-ave.jpg" alt="myrtle-ave" />
                            <p>Myrtle Ave Tea</p>
                        </div>
                        <div>
                            <img src="/images/img-berryblitz.jpg" alt="bedford-bizarre" />
                            <p>Bedford Bizarre Tea</p>
                        </div>
                    </div>
                </div>

                <div className="location">
                    <div>
                        <h2>Locations</h2>
                    </div>
                    <div className="big-box">
                        <div className="box">
                            <h2>Downtown</h2>
                            <p>384 West 4th St</p>
                            <p>Suite 108</p>
                            <p>Portland, Main</p>
                        </div>
                        <div className="box">
                            <h2> East Bay   </h2>
                            <p>384 Phiser Ave</p>
                            <p>North Corner</p>
                            <p>Portland, Main</p>
                        </div>
                        <div className="box">
                            <h2>OakdAle</h2>
                            <p>3812 Crescent Ave</p>
                            <p>Second Floor</p>
                            <p>Portland, Main</p>
                        </div>
                    </div>
                </div>

                <div className="contact">
                    <h2>The Tea Cozy</h2>
                    <h5>contact@theteacozy.com</h5>
                    <h5>917-555-8904</h5>
                </div>
            </main>
        </div>
    </>
);

export default MainPage;








