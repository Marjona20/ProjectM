import React from "react";

import { Img, Text } from "components";

const LastingmemoriesJoliPage = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end pt-[35px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="md:h-[437px] sm:h-[466px] h-[474px] md:mt-0 mt-[108px] md:px-5 relative w-1/2 md:w-full">
              <div className="md:h-[437px] sm:h-[466px] h-[474px] m-auto w-full">
                <div className="absolute bg-white-A700 flex flex-col font-worksans h-max inset-[0] items-end justify-center m-auto pt-12 md:px-10 px-12 sm:px-5 w-full">
                  <div className="flex flex-col md:gap-10 gap-[69px] items-start justify-start mt-[199px] w-[93%] md:w-full">
                    <Text
                      className="leading-[33.00px] text-[19px] text-gray-900 w-full"
                      size="txtWorkSansRegular19Gray900"
                    >
                      Chairs, cabinets, but especially tables by Joli are
                      durable products, designed to last and to be used
                      intensively.
                    </Text>
                    <div className="flex flex-row font-roboto gap-7 items-center justify-start w-[59%] md:w-full">
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
            <Img
              className="md:flex-1 h-[425px] sm:h-auto md:mt-0 mt-[265px] object-cover w-[21%] md:w-full"
              src="images/img_image_425x250.png"
              alt="image"
            />
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[199px] justify-start mb-[61px] md:px-5 w-[29%] md:w-full">
              <Img
                className="h-[180px] md:h-auto mr-[43px] object-cover w-[88%]"
                src="images/img_image_180x300.png"
                alt="image_One"
              />
              <Img
                className="h-[250px] md:h-auto ml-44 md:ml-[0] object-cover w-[49%]"
                src="images/img_image_250x167.png"
                alt="image_Two"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastingmemoriesJoliPage;
