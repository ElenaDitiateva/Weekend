import React from "react";
import RectLeftWhite from "../components/Category/images/main/RectLeftWhite";
import RectRightWhite from "../components/Category/images/main/RectRightWhite";
import CategoryItem from "../components/Category/CategoryItem";
import { useQuery } from "react-query";
import { getTags } from "../helpers/requests";
import { useParams } from "react-router-dom";
import { getTagById } from "../helpers/requests";

const TagsPage = () => {
  // const { id } = useParams();
  // const { data: tag } = useQuery(["tag", id], () => getTagById(id));
  // console.log(tag); 

  const { data: tags } = useQuery("tags", getTags);
  //console.log(tags); 
  
  const data = (tags[0].Services);  //при обновлении страницы ругается на [0]
  console.log(data);

  return (
    <>
      <div className="w-95 md:w-full xl:w-full mx-auto -mb-2.5 flex flex-col text-center">
        <div className="p-4 bg-tagsOrange bg-no-repeat bg-cover bg-center">
          <div className="flex flex-wrap justify-center flex-col">
            <div className="w-60 mt-4 mb-5 mx-auto flex justify-center items-center">
              <RectLeftWhite />
              <h1 className="text-white w-full text-xl font-bold px-5 flex-shrink-0">
                {/* {data.name}   */}
                #рейтинг_5
              </h1>
              <RectRightWhite />
            </div>
            <div className="flex flex-wrap justify-between">
              {data?.map((item, idx) => (
                <CategoryItem item={item} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsPage;
