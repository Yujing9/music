import {createService} from "../index.js"

export const getSwiperData = () => {
    
    console.log("getSwiperData");
};
// 默认返回十条数据
export const getRecommendData = async() => {
    const service = await createService();
    try {
        const response = await service.get("recommendations?limit=10&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=pop&seed_tracks=0c6xIDDpzE81m2q797ordA");
        return response.data;
      } catch (error) {
        console.error(error);
      }
};


