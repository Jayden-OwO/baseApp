// 1:降序 2:升序
export const compare = (property = '', sortType = 1) => {
  return (a: any, b: any) => {
    const value1 = a[property] || 0;
    const value2 = b[property] || 0;
    return Number(sortType) === 1 ? value2 - value1 : value1 - value2;
  };
};

export const simpleCloneObj = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};
