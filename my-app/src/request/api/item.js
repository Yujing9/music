import {createService} from "../index.js"


// 默认返回十条数据
export const getAlbumData = async(id) => {
    const service = await createService();
    try {
        const response = await service.get(`albums/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
};
