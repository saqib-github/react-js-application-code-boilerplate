import moment from "moment";

export const convertBlobToBase64 = async (blob) => {
  // blob data
  return await blobToBase64(blob);
};

const blobToBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const findIndexForBreadCrumb = (routes, pathname) => {
  let index = 0;
  for (let i = 0; i < routes.length; i++) {
    let path1 = routes[i].path;
    let path2 = pathname;
    if (routes[i].path.includes(":id")) {
      const replaceStr = routes[i].path.split("/").pop();
      const replaceStr2 = pathname.split("/").pop();
      path1 = routes[i].path.replace(replaceStr, "");
      path2 = pathname.replace(replaceStr2, "");
      console.log(
        routes[i].path.replace(replaceStr, ""),
        pathname.replace(replaceStr2, "")
      );
    }
    if (path1 === path2) {
      index = i;
    }
  }
  return index;
};

export const formatTime = (str) => {
  const d = new Date(str);

  return moment(d).format("YYYY-MM-DD");
};
export const formatTimeAndData = (str) => {
  const d = new Date(str);

  return moment(d).format("YYYY-MM-DD hh:mm:ss");
};
