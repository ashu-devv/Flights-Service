const { StatusCodes } = require('http-status-codes');

const { SuccessResponse, ErrorResponse } = require('../Utils/common');
const AppError = require('../Utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Flight Number not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Airplane Id not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Departure AirportId not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Arrival AirportId not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Arrival time not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Departure time not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Price not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }

    if (!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['Total Seats not found in the incoming request in the correct form'])
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }
    next();
}

function validateUpdateSeatsRequest(req,res,next){
    if (!req.body.seats) {
        ErrorResponse.message = 'Something went wrong while updating flight';
        ErrorResponse.error = new AppError(['seats not found in the incoming request in the correct form']);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);

    }
    next();

}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}