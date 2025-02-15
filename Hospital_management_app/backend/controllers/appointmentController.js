import {catchAsyncError} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../middlewares/errorMiddleware.js'
import {Appiontment} from '../models/appointmentSchema.js'
import { User } from '../models/userSchema.js';
export const postAppointment = catchAsyncError(async(req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        NIC,
        dob,
        gender,
        appointment_date,
        department,
        doctor_firstName,
        doctor_lastName,
        hasVisited,
        address
    } = req.body;

    if (!firstName ||
        !lastName ||
        !email ||
        !phone ||
        !NIC ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !doctor_firstName ||
        !doctor_lastName ||
        !address
    ) {
        return next(new ErrorHandler("Please fill all fields", 400));
    }

    const isConflict=await User.find({
        firstName:doctor_firstName,
        lastName:doctor_lastName,
        role:"Doctor",
        doctorDepartment:department

    })
    if(isConflict.length ===0){
        return next(new ErrorHandler("doctor not found",404))
    }
    if(isConflict.length > 1){
        return next(new ErrorHandler("doctors conflict! please contact through email or phone!",404))

    }
    const doctorId=isConflict[0]._id
    const patientId=req.user._id

    const appointment=await Appiontment.create({
        
        firstName,
        lastName,
        email,
        phone,
        NIC,
        dob,
        gender,
        appointment_date,
        department,
        doctor:{
         firstName:doctor_firstName,
            lastName:doctor_lastName,
        },
        hasVisited,
        address,
        doctorId,
        patientId
    });
    res.status(200).json({
     success:true,
     message:"Appointment send successfully!" ,
     appointment  
    })

});

export const getAppointment=catchAsyncError(async(req,res,nex)=>{
    const appointment=await Appiontment.find();
    res.status(200).json({
        success:true,
        appointment
    })
});

export const updateAppointmentStatus=catchAsyncError( async(req,res,next)=>{
const{id}=req.params;
let appointment= await Appiontment.findById(id);
if(!appointment){
    return next(new ErrorHandler('appointment not found!',404))
}
appointment=await Appiontment.findByIdAndUpdate(id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
});
res.status(200).json({
    success:true,
    message:"Appointment Status Update",
    appointment
})
})

export const deleteAppointment = catchAsyncError(async(req,res,next)=>{
    const{id}=req.params;
    let appointment= await Appiontment.findById(id);
    if(!appointment){
        return next(new ErrorHandler('appointment not found!',404))
    }
    await appointment.deleteOne();
    res.status(200).json({
        success:true,
        message:"appointment deleted!"

    })

})

