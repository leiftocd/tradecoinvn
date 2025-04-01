import { useState } from "react";
import { Card } from "../../../components/Card/Card";
import { Slide } from "../../../components/Slide/Slide";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import "./market.css";
function Market() {
  const images = [
    "/hashkey.png",
    "/okx.png",
    "/mexc.png",
    "/byBit.png",
    "/binance.png",
    "/bitget.png",
    "/bingX.png",

  ];
  const titles = ["hashkey", "okx", "mexc", "byBit", "binance", "bitget", "bingX"];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="market">

        {/* MARKET SECTION: START */}
        <div className="w-full h-full mx-[auto] flex py-[3rem] justify-center max-w-[108rem] px-[3rem] market-res">
          <div className="warpper-content gap-[2rem] flex market-res">
            <div className="col-left">
              <div className="w-full relative">
                <div className="pt-[18rem]" />
                <div>
                  <h2 className="text-[4.48rem] font-bold leading-[1.3] mb-[0.5em] text-white">
                    LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
                  </h2>
                </div>
                <div className="w-full flex flex-row gap-[5rem] justify-center market-col_res">
                  <div className="p-[0_1.5rem_3rem] ">
                    <div className="pt-[15vw]" />
                    <div className="relative">
                      <Card
                        img="/bingX.png"
                        title="Đăng kí tài khoản BingX"
                        description="Mã giới thiệu: 19986"
                        href="https://go.tradecoinvn.com/bingx"
                      />
                      <img
                        className="absolute aspect-square max-w-[16.4rem] -top-[50%] -translate-x-1/2 translate-y-1/2 left-[-5%]"
                        src="/smoker.png"
                      />
                    </div>
                    <div>
                      <Card
                        img="/hashkey.png"
                        title="Đăng kí tài khoản Hashkey"
                        description="Mã giới thiệu: 19986"
                        href="https://go.tradecoinvn.com/hashkey"

                      />
                    </div>
                  </div>
                  <div className="p-[0_1.5rem_3rem]">
                    <div className="pt-[5vw]" />
                    <div>
                      <Card
                        img="/okx.png"
                        title="Đăng kí tài khoản OKX"
                        description="Mã giới thiệu: 19986"
                        href="https://go.tradecoinvn.com/okx"
                      />
                    </div>
                    <div>
                      <Card
                        img="/mexc.png"
                        title="Đăng kí tài khoản MEXC"
                        description="Mã giới thiệu: 19986"
                        href="https://go.tradecoinvn.com/mexc"

                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-right">
              <div className="w-full">
                <div className="p-[0_1.5rem_3rem]">
                  <div className="relative">
                    <Card
                      img="/byBit.png"
                      title="Đăng kí tài khoản ByBit"
                      description="Mã giới thiệu: 19986"
                      href="https://go.tradecoinvn.com/bybit"

                    />
                  </div>
                  <div>
                    <Card
                      img="/binance.png"
                      title="Đăng kí tài khoản Binance"
                      description="Mã giới thiệu: 19986"
                      href="https://go.tradecoinvn.com/binance"

                    />
                  </div>
                  <div>
                    <Card
                      img="/bitget.png"
                      title="Đăng kí tài khoản BitGet"
                      description="Mã giới thiệu: 19986"
                      href="https://go.tradecoinvn.com/bitget"

                    />
                  </div>
                  <div>
                    <Card imgOnly img="/build.png" />
                  </div>
                </div>
              </div>
            </div>

            {/* Resposive */}
            <div className="market-slide">
              <h2 className="text-[3.36rem] font-bold leading-[1.3] mb-[1.68rem] text-white">
                LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
              </h2>

              <div className="relative w-full p-[0_15px_30px] mket">
                <img
                  className="absolute aspect-square max-w-[18%] -top-[2rem] -left-[2.5rem] z-10 left-img"
                  src="/smoker.png"
                />
                <Slide.Root
                  slidesPerView={3}
                  spaceBetween={10}
                  freeMode={true}
                  modules={[FreeMode, Autoplay]}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  
                  className="slide-content"
                >
                    {titles.map((title, index) => (
                      <Slide.Item key={index}>
                        <div className="p-[1rem]">
                          <Card
                            href={`https://go.tradecoinvn.com/${title}`}
                            img={images[index] || "/default.png"}
                            title={`Đăng kí tài khoản ${title.charAt(0).toUpperCase() + title.slice(1)}`}
                            description="Mã giới thiệu: 19986"
                            className={index === activeIndex && "active"}
                          />
                        </div>
                      </Slide.Item>
                    ))}
                </Slide.Root>
                <div className="w-full flex justify-end">
                  <Card className='max-w-[12.5rem] h-[12.5rem]' imgOnly img="/build.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

  );
}

export default Market;
