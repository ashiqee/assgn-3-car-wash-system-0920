import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { serviceBookings } from './booking.services';
import { User } from '../user/user.model';
import { ServicesSlot } from '../serviceSlots/serviceSlots.model';
import { TUserAuth } from '../user/user.interface';

const createServiceBooking = catchAsync(async (req, res) => {
  const bookingData = req.body;

  const user = req.user;

  const customer = await User.findOne({ email: user.userEmail });

  bookingData.customer = customer?._id;

  // booking succes after update booked
  if (customer) {
    await ServicesSlot.findByIdAndUpdate(
      bookingData.slot,
      { isBooked: 'booked' },
      { new: true },
    );
  }

  const result = await serviceBookings.createServiceBookingIntoDB(bookingData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successful',
    data: result,
  });
});

//get all bookings by admin
const getAllBookings = catchAsync(async (req, res) => {
  const result = await serviceBookings.getAllServiceBookingFromDB();
  if (result.length === 0) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

export const BookingControllers = {
  createServiceBooking,
  getAllBookings,
};
