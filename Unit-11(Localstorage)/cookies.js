
// cookie

document.cookie = 'name=kira ; max-age = 15';
document.cookie = 'age=12 ; expires=' + new Date ( 2025, 4 ,9).toUTCString();

// 2025 ,  may , 9 ( this goes to date '8' 12 baje samma)

console.log(document.cookie);
