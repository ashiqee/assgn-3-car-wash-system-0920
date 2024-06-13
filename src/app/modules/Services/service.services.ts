import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Service } from './service.model';
import { TService } from './service.interface';

const createServiceIntoDB = async (payload: TService) => {
  const isServiceExists = await Service.findOne({ name: payload.name });
  if (isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Same Service Name already exist');
  }

  const result = await Service.create(payload);

  return result;
};

// get all services

const getAllServicesFromDB = async () => {
  const result = await Service.find();
  return result;
};

// get a service

const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id);

  return result;
};

// update services

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const isServiceExists = await Service.findById(id);
  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This service is not found');
  }

  const { ...remainingServiceData } = payload;
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingServiceData,
  };

  const result = await Service.findByIdAndUpdate(id, modifiedUpdateData, {
    new: true,
    runValidators: true,
  });

  return result;
};

// delete service
const deleteServiceFromDB = async (id: string) => {
  const isServiceExists = await Service.findById(id);

  if (!isServiceExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Service does not exist');
  }

  const result = await Service.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true },
  );
  return result;
};

export const Services = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
};
