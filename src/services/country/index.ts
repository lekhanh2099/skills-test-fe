import ApiService from "../Apis";

export const getList = async () => {
  try {
    const res = await ApiService.request({
      method: "get",
      data: {},
      endpoint: "https://www.ag-grid.com/example-assets/olympic-winners.json",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
