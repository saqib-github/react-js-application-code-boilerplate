export const getFileFromBase64 = (string64, fileName) => {
    var arr = string64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), 
    n = bstr.length, 
    u8arr = new Uint8Array(n);
    
while(n--){
    u8arr[n] = bstr.charCodeAt(n);
}

return new File([u8arr], fileName, {type:mime});
};
