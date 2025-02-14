import {catchAsyncError} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../middlewares/errorMiddleware.js'
import {Appiontment} from '../models/appointmentSchema.js'
import {User} from '../models/userSchema.js'

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
        deparatment,
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
        !deparatment ||
        !doctor_firstName ||
        !doctor_lastName ||
        !hasVisited ||
        !address
    ) {
        return next(new ErrorHandler("Please fill all fields", 400));
    }

    const isConflict=await User.find({
        firstName:doctor_firstName,
        lastName:doctor_lastName,
        role:"Doctor",
        doctorDepartment:deparatment

    })
    if(isConflict.length ===0){
        return next(new ErrorHandler("doctor not found",404))
    }
    if(isConflict.length > 1){
        return next(new ErrorHandler("doctors conflict! please contact through email or phone!",404))

    }
    const doctorId=isConflict[0]._id
    const patientId=req.user._id

    const appoinment=await Appiontment.create({
        
        firstName,
        lastName,
        email,
        phone,
        NIC,
        dob,
        gender,
        appointment_date,
        deparatment,
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
     message:"Appointment send successfully!"   
    })

});