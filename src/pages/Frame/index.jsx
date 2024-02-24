import React from "react";

import { Button, Img, Input, Text } from "components";

const FramePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-worksans h-[7001px] mx-auto overflow-auto relative w-full">
        <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
          <div className="flex-1 overflow-x-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col md:px-5 relative w-full">
                <div className="font-worksans h-[1543px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
                  <div className="absolute md:h-[1258px] h-[1525px] sm:h-[1534px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-full">
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[86%] md:w-full">
                        <Img
                          className="h-[53px]"
                          src="images/img_frame.svg"
                          alt="frame"
                        />
                        <Button
                          className="flex h-[45px] items-center justify-center my-1 rounded-[22px] w-[45px]"
                          color="black_900"
                          variant="fill"
                        >
                          <Img
                            className="h-[19px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <div className="h-[1202px] md:h-[1205px] sm:h-[1481px] mt-[3px] relative w-full">
                        <div className="bg-black-900 flex flex-col h-full items-start justify-start ml-auto my-auto p-[25px] sm:px-5 w-1/2">
                          <div className="bg-white-A700 h-7 mb-[26px] mt-[159px] rounded-[14px] shadow-bs w-[14%]"></div>
                        </div>
                        <div className="absolute bg-gray-900 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[84px] md:px-10 sm:px-5 px-[84px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Img
                              className="h-[53px]"
                              src="images/img_frame.svg"
                              alt="frame_One"
                            />
                            <div className="flex sm:flex-col flex-row gap-9 items-center justify-between mt-[212px] w-full">
                              <div className="bg-gray-900 h-[103px] w-[49%]"></div>
                              <div className="bg-gray-900 h-[103px] w-[49%]"></div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[34px] items-center justify-between mt-[647px] w-full">
                              <div className="bg-gray-900 h-[103px] w-[49%]"></div>
                              <div className="bg-gray-900 h-[103px] w-[49%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute flex h-16 items-center justify-center right-[6%] top-[5%] w-16"
                      shape="circle"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[27px]"
                        src="images/img_plus.svg"
                        alt="plus_One"
                      />
                    </Button>
                    <div className="absolute bg-white-A700 flex h-[800px] inset-x-[0] justify-end mx-auto top-[0] w-full">
                      <Img
                        className="absolute h-16 right-[6%] top-[3%] w-16"
                        src="images/img_frame_black_900.svg"
                        alt="frame_Two"
                      />
                      <div className="flex flex-col md:gap-10 gap-[203px] h-full items-center justify-start mb-[55px] mt-auto mx-auto w-[17%]">
                        <div className="border border-solid border-white-A700 h-[50px] rounded-[25px] w-full"></div>
                        <Img
                          className="h-[41px]"
                          src="images/img_frame_black_900_41x18.svg"
                          alt="frame_Three"
                        />
                      </div>
                      <div className="absolute h-[800px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[800px] m-auto object-cover w-full"
                          src="images/img_image.png"
                          alt="image_Four"
                        />
                        <Text
                          className="absolute left-[0] text-gray-900 text-lg top-[0]"
                          size="txtWorkSansRegular18"
                        >
                          Skip to main content
                        </Text>
                        <div className="absolute flex flex-col md:gap-10 gap-[215px] justify-start right-[16%] top-[6%] w-[62%]">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="mb-0.5 text-[19px] text-white-A700"
                              size="txtWorkSansRegular19"
                            >
                              Collections
                            </Text>
                            <Text
                              className="mb-0.5 text-[19px] text-white-A700"
                              size="txtWorkSansRegular19"
                            >
                              Products
                            </Text>
                            <Text
                              className="sm:mt-0 mt-0.5 text-[19px] text-white-A700"
                              size="txtWorkSansRegular19"
                            >
                              Inspiration
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtWorkSansRegular18WhiteA700"
                            >
                              About us
                            </Text>
                            <Text
                              className="mb-0.5 text-[19px] text-white-A700"
                              size="txtWorkSansRegular19"
                            >
                              Find a dealer
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row font-roboto sm:gap-10 gap-24 items-start justify-start ml-9 md:ml-[0] w-[83%] md:w-full">
                            <Text
                              className="lowercase sm:mt-0 mt-[5px] md:text-5xl text-[68px] text-center text-white-A700"
                              size="txtRobotoRegular68"
                            >
                              Lasting
                            </Text>
                            <Text
                              className="lowercase mb-[5px] md:text-5xl text-[68px] text-center text-white-A700"
                              size="txtRobotoRegular68"
                            >
                              memories
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto py-[35px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[26px] w-full">
                        <div className="md:h-[465px] h-[474px] md:mt-0 mt-[108px] relative w-1/2 md:w-full">
                          <div className="md:h-[465px] h-[474px] m-auto w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto pt-12 md:px-10 px-12 sm:px-5 w-full">
                              <div className="flex flex-col items-start justify-start mt-[99px] w-[93%] md:w-full">
                                <Text
                                  className="lowercase text-[19px] text-gray-300"
                                  size="txtRobotoRegular19"
                                >
                                  Language
                                </Text>
                                <Text
                                  className="leading-[33.00px] mt-[76px] text-[19px] text-gray-900 w-full"
                                  size="txtWorkSansRegular19Gray900"
                                >
                                  Chairs, cabinets, but especially tables by
                                  Joli are durable products, designed to last
                                  and to be used intensively.
                                </Text>
                                <div className="flex flex-row font-roboto gap-7 items-center justify-start mt-[69px] w-[59%] md:w-full">
                                  <Text
                                    className="border border-gray-900 border-solid lowercase pb-4 pl-[30px] pr-[35px] pt-2.5 sm:px-5 rounded-[25px] text-[19px] text-gray-900"
                                    size="txtRobotoRegular19Gray900"
                                  >
                                    About us
                                  </Text>
                                  <Text
                                    className="lowercase text-[19px] text-gray-900"
                                    size="txtRobotoRegular19Gray900"
                                  >
                                    Collections
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[0]"
                              size="txtRobotoRegular68Gray900"
                            >
                              Making
                            </Text>
                            <Text
                              className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[15%]"
                              size="txtRobotoRegular68Gray900"
                            >
                              tables
                            </Text>
                          </div>
                          <Text
                            className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[28%]"
                            size="txtRobotoRegular68Gray900"
                          >
                            heroes
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col md:gap-10 gap-[199px] justify-start w-[29%] md:w-full">
                          <Img
                            className="h-[180px] md:h-auto mr-[43px] object-cover w-[88%]"
                            src="images/img_image_180x300.png"
                            alt="image_Five"
                          />
                          <Img
                            className="h-[250px] md:h-auto ml-44 md:ml-[0] object-cover w-[49%]"
                            src="images/img_image_250x167.png"
                            alt="image_Six"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[425px] object-cover right-[29%] w-[21%]"
                    src="images/img_image_425x250.png"
                    alt="image_Seven"
                  />
                </div>
                <div className="bg-gray-300 flex flex-col font-worksans items-center justify-end mt-[-18px] mx-auto py-[46px] w-full z-[1]">
                  <div className="flex flex-col md:gap-10 gap-[84px] items-end justify-start mt-[68px] w-full">
                    <div className="md:h-[223px] h-[232px] sm:h-[663px] relative w-full">
                      <div className="absolute bg-gray-300 flex flex-col font-worksans h-max inset-[0] items-start justify-center m-auto p-2 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[75px] mt-[152px] w-[56%] md:w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="lowercase mb-0.5 text-[19px] text-gray-900"
                              size="txtWorkSansRegular19Gray900"
                            >
                              Central
                            </Text>
                            <Text
                              className="lowercase text-gray-900 text-lg"
                              size="txtWorkSansRegular18"
                            >
                              Olivo
                            </Text>
                            <Text
                              className="lowercase text-gray-900 text-lg"
                              size="txtWorkSansRegular18"
                            >
                              Morisot
                            </Text>
                            <Text
                              className="lowercase sm:mt-0 mt-0.5 text-[19px] text-gray-900"
                              size="txtWorkSansRegular19Gray900"
                            >
                              Curve
                            </Text>
                            <Text
                              className="lowercase text-[19px] text-gray-900"
                              size="txtWorkSansRegular19Gray900"
                            >
                              Wire
                            </Text>
                            <Text
                              className="lowercase sm:mt-0 mt-0.5 text-[19px] text-gray-900"
                              size="txtWorkSansRegular19Gray900"
                            >
                              Marguerite
                            </Text>
                            <Text
                              className="lowercase text-gray-900 text-lg"
                              size="txtWorkSansRegular18"
                            >
                              Fizz
                            </Text>
                            <Text
                              className="lowercase mb-0.5 text-[19px] text-gray-900"
                              size="txtWorkSansRegular19Gray900"
                            >
                              Rafael
                            </Text>
                          </div>
                          <Text
                            className="lowercase text-[19px] text-gray-900"
                            size="txtWorkSansRegular19Gray900"
                          >
                            Chagall
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute left-[7%] lowercase md:text-5xl text-[68px] text-gray-900 top-[0]"
                        size="txtRobotoRegular68Gray900"
                      >
                        Our
                      </Text>
                      <Text
                        className="absolute left-[7%] lowercase md:text-5xl text-[68px] text-gray-900 top-[30%]"
                        size="txtRobotoRegular68Gray900"
                      >
                        collections
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-full">
                        <div className="flex h-[379px] justify-end relative w-[53%] md:w-full">
                          <div className="bg-white-A700 h-[35px] mb-[27px] ml-[27px] mt-auto rounded-[17px] w-1/4"></div>
                          <div className="absolute h-[379px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[379px] m-auto object-cover w-full"
                              src="images/img_image_379x591.png"
                              alt="image_Eight"
                            />
                            <Text
                              className="absolute h-max inset-[0] justify-center lowercase m-auto sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-max"
                              size="txtRobotoRegular45"
                            >
                              Central
                            </Text>
                            <Text
                              className="absolute bottom-[9%] left-[8%] text-base text-center text-gray-900"
                              size="txtWorkSansRegular16"
                            >
                              award winner
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[75px] md:mt-0 mt-[190px] text-base text-gray-900"
                          size="txtWorkSansRegular16"
                        >
                          Believe us, this will be a real eye-catcher
                        </Text>
                        <div className="font-roboto h-[379px] md:ml-[0] ml-[343px] relative w-[53%] md:w-full">
                          <Img
                            className="h-[379px] m-auto object-cover w-full"
                            src="images/img_image_1.png"
                            alt="image_Nine"
                          />
                          <Text
                            className="absolute h-max inset-[0] justify-center lowercase m-auto sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-max"
                            size="txtRobotoRegular45"
                          >
                            Morisot
                          </Text>
                        </div>
                        <Text
                          className="lowercase md:ml-[0] ml-[3600px] md:mt-0 mt-[162px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                          size="txtRobotoRegular45"
                        >
                          Chagall
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-6 w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtWorkSansRegular16"
                        >
                          ready to become the centerpiece of your home
                        </Text>
                        <Img
                          className="h-2.5 sm:ml-[0] ml-[180px] sm:mt-0 mt-[5px]"
                          src="images/img_frame_black_900_41x18.svg"
                          alt="frame_Four"
                        />
                        <Img
                          className="h-2.5 sm:ml-[0] ml-[1290px]"
                          src="images/img_frame_black_900_41x18.svg"
                          alt="frame_Five"
                        />
                      </div>
                      <div className="flex flex-row font-roboto items-center justify-end md:ml-[0] ml-[881px] mt-[102px] w-[14%] md:w-full">
                        <Img
                          className="h-[11px]"
                          src="images/img_frame_black_900_41x18.svg"
                          alt="frame_Six"
                        />
                        <Text
                          className="ml-0.5 text-[22px] text-gray-900 sm:text-lg md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          1
                        </Text>
                        <Text
                          className="ml-[15px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          /
                        </Text>
                        <Text
                          className="ml-4 text-[22px] text-gray-900 sm:text-lg md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          9
                        </Text>
                        <Img
                          className="h-[11px] ml-[3px]"
                          src="images/img_frame_black_900_41x18.svg"
                          alt="frame_Seven"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-roboto h-[379px] md:h-[NaNpx] mb-[432px] ml-auto mt-[-NaNpx] w-[38%] sm:w-full z-[1]">
                  <Img
                    className="h-[379px] m-auto object-cover w-full"
                    src="images/img_image_379x450.png"
                    alt="image_Fourteen"
                  />
                  <Text
                    className="absolute h-max inset-y-[0] lowercase my-auto right-[24%] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                    size="txtRobotoRegular45"
                  >
                    Olivo
                  </Text>
                </div>
                <Img
                  className="h-[60px] ml-auto mt-[-NaNpx] object-cover rounded-sm w-[6%] z-[1]"
                  src="defaultNoData.png"
                  alt="rectangle_Seven"
                />
                <Text
                  className="lowercase ml-auto mr-[530px] mt-[-NaNpx] text-[19px] text-gray-300 z-[1]"
                  size="txtRobotoRegular19"
                >
                  Region
                </Text>
              </div>
              <Img
                className="h-2.5 md:mt-0 mt-[2152px]"
                src="images/img_frame_black_900_41x18.svg"
                alt="frame_Eight"
              />
            </div>
          </div>
          <div className="md:ml-[0] ml-[1431px] md:mt-0 mt-[2152px] overflow-x-auto w-[1%]">
            <div className="flex flex-row items-center justify-between w-full">
              <Img
                className="h-2.5"
                src="images/img_frame_black_900_41x18.svg"
                alt="frame_Nine"
              />
              <Img
                className="h-2.5"
                src="images/img_frame_black_900_41x18.svg"
                alt="frame_Ten"
              />
            </div>
          </div>
          <div className="md:ml-[0] ml-[1547px] md:mt-0 mt-[2354px] overflow-x-auto w-[1%]">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="flex-1 leading-[29.00px] text-base text-gray-900 w-full"
                size="txtWorkSansRegular16"
              >
                The tables and chairs are fashioned from fine, stainless steel
                wire.
              </Text>
              <Text
                className="flex-1 leading-[29.00px] text-base text-gray-900 w-full"
                size="txtWorkSansRegular16"
              >
                The starting point of this collection is organically shaped
                aluminium.
              </Text>
            </div>
          </div>
          <div className="md:ml-[0] ml-[1547px] md:mt-0 mt-[2389px] overflow-x-auto w-[1%]">
            <div className="flex flex-row items-center justify-between w-full">
              <Img
                className="h-2.5"
                src="images/img_frame_black_900_41x18.svg"
                alt="frame_Eleven"
              />
              <Img
                className="h-2.5"
                src="images/img_frame_black_900_41x18.svg"
                alt="frame_Twelve"
              />
            </div>
          </div>
          <div className="md:ml-[0] ml-[1574px] md:mt-0 mt-[2274px] overflow-x-auto w-[1%]">
            <div className="flex flex-row items-center justify-between w-full">
              <Button
                className="cursor-pointer min-w-[148px] rounded-[17px] text-base text-center"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                Award winner
              </Button>
              <Button
                className="cursor-pointer min-w-[146px] rounded-[17px] text-base text-center"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                award winner
              </Button>
            </div>
          </div>
          <div className="font-roboto md:ml-[0] ml-[1787px] md:mt-0 mt-[2119px] overflow-x-auto w-[1%]">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="lowercase sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                size="txtRobotoRegular45"
              >
                Wire
              </Text>
              <Text
                className="lowercase sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                size="txtRobotoRegular45"
              >
                Fizz
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="md:h-[458px] h-[478px] md:mt-0 mt-[107px] md:px-5 relative w-1/2 md:w-full">
              <div className="absolute bg-white-A700 flex flex-col font-worksans gap-[35px] h-max inset-[0] items-start justify-center m-auto w-full">
                <Text
                  className="leading-[33.00px] md:ml-[0] ml-[83px] mt-[178px] text-[19px] text-gray-900 w-[69%] sm:w-full"
                  size="txtWorkSansRegular19Gray900"
                >
                  We work together with dealers in 19 countries, all over the
                  world. Find out which one is closest to you.
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[83px] pb-[85px] w-[54%] md:w-full">
                  <div className="border border-blue_gray-400 border-solid flex flex-col items-start justify-start p-[17px] rounded-[14px] w-full">
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[5px] text-[19px] text-blue_gray-400"
                      size="txtWorkSansRegular19Bluegray400"
                    >
                      Your location
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="absolute bottom-[0] cursor-pointer font-roboto left-[14%] lowercase min-w-[131px] text-[19px] text-center"
                shape="round"
              >
                Search
              </Button>
              <Text
                className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[0]"
                size="txtRobotoRegular68Gray900"
              >
                Find
              </Text>
              <Text
                className="absolute inset-x-[0] lowercase mx-auto md:text-5xl text-[68px] text-gray-900 top-[1%] w-max"
                size="txtRobotoRegular68Gray900"
              >
                a
              </Text>
              <Text
                className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[15%]"
                size="txtRobotoRegular68Gray900"
              >
                dealer
              </Text>
            </div>
            <div className="h-[840px] md:px-5 relative w-1/2 md:w-full">
              <Img
                className="h-[840px] m-auto object-cover w-full"
                src="images/img_image_840x600.png"
                alt="image_TwentyOne"
              />
              <Img
                className="absolute h-[840px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_image_2.png"
                alt="image_TwentyTwo"
              />
            </div>
          </div>
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="md:h-[500px] h-[680px] mx-auto w-full">
              <div className="absolute bg-gray-900 md:h-[500px] h-[592px] inset-x-[0] mx-auto pb-[92px] top-[0] w-full">
                <div className="h-[500px] mx-auto w-full">
                  <div className="absolute bg-gray-900 bottom-[6%] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[297px] md:px-10 sm:px-5 px-[297px] w-full">
                    <Input
                      name="groupEleven"
                      placeholder="Inspire me"
                      className="lowercase p-0 placeholder:text-gray-300 text-[19px] text-left w-full"
                      wrapClassName="w-[30%]"
                    ></Input>
                  </div>
                  <div className="absolute h-[500px] inset-y-[0] left-[7%] my-auto w-[21%]">
                    <Img
                      className="h-[500px] m-auto object-cover w-full"
                      src="images/img_image_500x250.png"
                      alt="image_TwentyThree"
                    />
                    <div className="absolute h-[500px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[500px] m-auto object-cover w-full"
                        src="images/img_image_3.png"
                        alt="image_TwentyFour"
                      />
                      <Img
                        className="absolute h-[500px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image_4.png"
                        alt="image_TwentyFive"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[225px] right-[0] top-[14%] w-[21%]">
                  <Img
                    className="h-[225px] m-auto object-cover w-full"
                    src="images/img_image_225x250.png"
                    alt="image_TwentySix"
                  />
                  <Img
                    className="absolute h-[225px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image_5.png"
                    alt="image_TwentySeven"
                  />
                </div>
                <div className="absolute flex flex-col gap-[31px] justify-start left-[14%] top-[19%]">
                  <Text
                    className="lowercase md:ml-[0] ml-[285px] md:text-5xl text-[68px] text-gray-300"
                    size="txtRobotoRegular68Gray300"
                  >
                    Terrace
                  </Text>
                  <Text
                    className="lowercase md:text-5xl text-[68px] text-gray-300"
                    size="txtRobotoRegular68Gray300"
                  >
                    Ceremonies & Meetings
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] h-[250px] right-[8%] w-[250px]">
                <Img
                  className="h-[250px] m-auto object-cover w-[250px]"
                  src="images/img_image_250x250.png"
                  alt="image_TwentyEight"
                />
                <div className="absolute h-[250px] inset-[0] justify-center m-auto w-[250px]">
                  <Img
                    className="h-[250px] m-auto object-cover w-[250px]"
                    src="images/img_image_6.png"
                    alt="image_TwentyNine"
                  />
                  <Img
                    className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-[250px]"
                    src="images/img_image_7.png"
                    alt="image_Thirty"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-87px] mx-auto p-[115px] md:px-10 sm:px-5 w-full z-[1]">
              <Text
                className="lowercase mt-2 sm:text-[39px] md:text-[45px] text-[49px] text-center text-gray-900"
                size="txtRobotoRegular49"
              >
                Joli manages to
              </Text>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="lowercase sm:text-[39px] md:text-[45px] text-[49px] text-center text-gray-900"
                  size="txtRobotoRegular49"
                >
                  offer designs
                </Text>
                <Text
                  className="lowercase sm:text-[39px] md:text-[45px] text-[49px] text-center text-gray-900"
                  size="txtRobotoRegular49"
                >
                  that are both
                </Text>
              </div>
              <Text
                className="lowercase mt-2.5 sm:text-[39px] md:text-[45px] text-[49px] text-center text-gray-900"
                size="txtRobotoRegular49"
              >
                timelessly modern
              </Text>
              <Text
                className="lowercase sm:text-[39px] md:text-[45px] text-[49px] text-center text-gray-900"
                size="txtRobotoRegular49"
              >
                and trendy
              </Text>
              <Button
                className="cursor-pointer lowercase min-w-[155px] mt-[31px] text-[19px] text-center"
                shape="round"
              >
                About us
              </Button>
            </div>
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="h-[840px] md:px-5 relative w-1/2 md:w-full">
              <Img
                className="h-[840px] m-auto object-cover w-full"
                src="images/img_image_8.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="absolute h-[840px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_image_9.png"
                alt="image_ThirtyTwo"
              />
            </div>
            <div className="md:h-[399px] h-[422px] md:mt-0 mt-[106px] md:px-5 relative w-1/2 md:w-full">
              <div className="absolute bg-gray-100 flex flex-col font-worksans h-max inset-[0] items-center justify-center m-auto p-[84px] md:px-10 sm:px-5 w-full">
                <Text
                  className="leading-[33.00px] mb-5 mt-[111px] text-[19px] text-gray-900 w-full"
                  size="txtWorkSansRegular19Gray900"
                >
                  Do you want to become a Joli retailer? Please submit the
                  following form and we will contact you!
                </Text>
              </div>
              <Input
                name="groupSix"
                placeholder="Learn more"
                className="font-roboto lowercase p-0 placeholder:text-gray-900 text-[19px] text-left w-full"
                wrapClassName="absolute bottom-[0] left-[14%] w-[30%]"
                color="gray_900"
              ></Input>
              <Text
                className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[0]"
                size="txtRobotoRegular68Gray900"
              >
                Become
              </Text>
              <Text
                className="absolute lowercase right-[32%] md:text-5xl text-[68px] text-gray-900 top-[2%]"
                size="txtRobotoRegular68Gray900"
              >
                a
              </Text>
              <Text
                className="absolute left-[14%] lowercase md:text-5xl text-[68px] text-gray-900 top-[18%]"
                size="txtRobotoRegular68Gray900"
              >
                dealer
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start w-full">
            <Img
              className="h-[800px] md:h-auto object-cover w-2/5"
              src="images/img_image_800x480.png"
              alt="image_ThirtyThree"
            />
          </div>
          <div className="bg-gray-300 md:h-[133px] sm:h-[262px] h-[289px] p-[55px] md:px-5 relative w-full">
            <div className="absolute bottom-[19%] flex flex-col gap-[25px] justify-start left-[7%] w-[78%]">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[153px] w-[84%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtRobotoRegular30"
                >
                  2022 catalogue.
                </Text>
                <div className="border border-blue_gray-400 border-solid h-[62px] sm:mt-0 mt-1.5 rounded-[14px] w-[45%]"></div>
              </div>
              <div className="border border-blue_gray-400 border-solid flex sm:flex-col flex-row font-worksans gap-2 items-center justify-end md:ml-[0] ml-[430px] p-1.5 rounded-[14px] w-[54%] md:w-full">
                <Text
                  className="text-[19px] text-gray-900"
                  size="txtWorkSansRegular19Gray900"
                >
                  I agree with the
                </Text>
                <Text
                  className="text-[19px] text-gray-900"
                  size="txtWorkSansRegular19Gray900"
                >
                  Privacy & Cookie Policy
                </Text>
                <Text
                  className="mb-[3px] mr-[7px] text-[19px] text-gray-900"
                  size="txtWorkSansRegular19Gray900"
                >
                  of Joli
                </Text>
              </div>
            </div>
            <Button
              className="absolute cursor-pointer lowercase min-w-[107px] right-[7%] text-[19px] text-center top-[22%]"
              shape="round"
            >
              Send
            </Button>
            <Text
              className="absolute left-[7%] text-3xl sm:text-[26px] md:text-[28px] text-gray-900 top-[21%]"
              size="txtRobotoRegular30"
            >
              Request our
            </Text>
            <div className="absolute flex flex-row gap-[49px] inset-x-[0] items-start justify-center mx-auto top-[19%] w-[15%]">
              <Text
                className="lowercase mt-0.5 text-[19px] text-gray-900"
                size="txtRobotoRegular19Gray900"
              >
                Email address
              </Text>
              <Text
                className="lowercase mb-0.5 text-[19px] text-gray-900"
                size="txtRobotoRegular19Gray900"
              >
                *
              </Text>
            </div>
          </div>
          <footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[78px] ml-[84px] mr-[94px] mt-[73px] w-[86%]">
              <div className="flex flex-col items-center justify-center w-full">
                <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[74px] w-[93%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <Img
                        className="h-[53px]"
                        src="images/img_frame.svg"
                        alt="frame_Thirteen"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="lowercase md:ml-[0] ml-[156px] text-[19px] text-gray-300"
                    >
                      <Text size="txtRobotoRegular19">Collections</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="lowercase md:ml-[0] ml-[75px] text-[19px] text-gray-300"
                    >
                      <Text size="txtRobotoRegular19">Products</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="lowercase md:ml-[0] ml-[82px] md:mt-0 mt-0.5 text-[19px] text-gray-300"
                    >
                      <Text size="txtRobotoRegular19">Inspiration</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="lowercase md:ml-[0] ml-[79px] text-[19px] text-gray-300"
                    >
                      <Text size="txtRobotoRegular19">About us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="lowercase md:ml-[0] ml-[86px] text-[19px] text-gray-300"
                    >
                      <Text size="txtRobotoRegular19">Contact</Text>
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col font-worksans items-start justify-start md:ml-[0] ml-[228px] w-[78%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between">
                        <ul className="flex flex-col gap-[9px] items-start justify-start w-[32%] md:w-full common-column-list">
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-between">
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Wire
                                </Text>
                                <Text
                                  className="text-gray-300 text-lg"
                                  size="txtWorkSansRegular18Gray300"
                                >
                                  Tables
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-between">
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Curve
                                </Text>
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Chairs
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-between">
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Fizz
                                </Text>
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Cabinets
                                </Text>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="leading-[33.00px] text-[19px] text-gray-300 w-full"
                            size="txtWorkSansRegular19Gray300"
                          >
                            Joli Days 2022
                          </Text>
                          <Text
                            className="text-[19px] text-gray-300"
                            size="txtWorkSansRegular19Gray300"
                          >
                            Terrace
                          </Text>
                        </div>
                        <ul className="flex flex-col gap-2.5 items-start justify-start w-[38%] md:w-full common-column-list">
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-between">
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Materials
                                </Text>
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Industrielaan 5
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-[37px] items-start justify-start">
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Find a dealer
                                </Text>
                                <Text
                                  className="mt-0.5 text-gray-300 text-lg"
                                  size="txtWorkSansRegular18Gray300"
                                >
                                  8520 Kortrijk
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-9 items-start justify-start">
                                <Text
                                  className="text-[19px] text-gray-300"
                                  size="txtWorkSansRegular19Gray300"
                                >
                                  Professionals
                                </Text>
                                <Text
                                  className="mt-0.5 text-gray-300 text-lg"
                                  size="txtWorkSansRegular18Gray300"
                                >
                                  info@joli.be
                                </Text>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <ul className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2 md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-[19px] text-gray-300"
                          >
                            <Text size="txtWorkSansRegular19Gray300">
                              Marguerite
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="sm:ml-[0] ml-[68px] text-[19px] text-gray-300"
                          >
                            <Text size="txtWorkSansRegular19Gray300">
                              Accessories
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="leading-[33.00px] ml-12 sm:ml-[0] text-[19px] text-gray-300"
                          >
                            <Text size="txtWorkSansRegular19Gray300">
                              Ceremonies & Meetings
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-10 sm:ml-[0] text-[19px] text-gray-300"
                          >
                            <Text size="txtWorkSansRegular19Gray300">News</Text>
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-14">
                        <Text
                          className="leading-[19.00px] text-base text-gray-300 w-[14%] sm:w-full"
                          size="txtWorkSansRegular16Gray300"
                        >
                          Privacy & Cookie Policy
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[114px] text-[15px] text-gray-300"
                          size="txtWorkSansRegular15"
                        >
                          Disclaimer
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[140px] text-[15px] text-gray-300"
                          size="txtWorkSansRegular15"
                        >
                          made by skinn
                        </Text>
                        <Img
                          className="h-[21px] md:ml-[0] ml-[111px] w-[21px]"
                          src="images/img_frame_black_900_21x21.svg"
                          alt="frame_Fourteen"
                        />
                        <Img
                          className="h-[21px] md:ml-[0] ml-[15px] w-[21px]"
                          src="images/img_frame_21x21.svg"
                          alt="frame_Fifteen"
                        />
                        <Img
                          className="h-[21px] md:ml-[0] ml-[15px] w-[21px]"
                          src="images/img_frame_1.svg"
                          alt="frame_Sixteen"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <Text
          className="absolute leading-[29.00px] right-[0] text-gray-900 text-sm top-[34%] w-[47%] sm:w-full"
          size="txtWorkSansRegular14"
        >
          The ultimate in feminity: Chagall’s ‘egg cup’ curves are organic and
          graceful.
        </Text>
      </div>
    </>
  );
};

export default FramePage;
