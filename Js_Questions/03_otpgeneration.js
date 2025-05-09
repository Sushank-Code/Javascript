
const otp_generate = (params) => {
    let otp = ""
    otp = parseInt(Math.random() * 9000 + 1000);
    console.log(otp);
}

otp_generate();