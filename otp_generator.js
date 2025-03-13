function createOTPSystem() {
    let otp = null;
    return{
        generateOTP() {
            otp = Math.floor(100000 + Math.random() * 900000).toString();
            return `Your OTP is : ${otp}`;
        },
        getOTP() {
            if(!otp) {
                return "OTP Expired";
            }
            const temp = otp;
            otp = null;
            return temp;
        }
    };
}
const otpSystem = createOTPSystem();  
console.log(otpSystem.generateOTP());
console.log(otpSystem.getOTP());        
console.log(otpSystem.getOTP());      
console.log(otpSystem.generateOTP()); 
console.log(otpSystem.getOTP());  
console.log(otpSystem.getOTP());      
