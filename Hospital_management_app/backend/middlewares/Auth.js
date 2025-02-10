import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "./errorMiddleware.js";

export const isAdminAuthenticalted = catchAsyncError(async(req, res, next) => {
    const token = req.cookies.adminToken;
    if(!token) {
        return next(new ErrorHandler("admin not authenticated", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECERET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role !== "Admin") {
        return next(new ErrorHandler(`${req.user.role} not authorized for this resource!`, 400));
    }
    next();
});

export const isPatientAuthenticalted = catchAsyncError(async(req, res, next) => {
    const token = req.cookies.patientToken;
    if(!token) {
        return next(new ErrorHandler("patient not authenticated", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECERET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role !== "Patient") {
        return next(new ErrorHandler(`${req.user.role} not authorized for this resource!`, 400));
    }
    next();
});