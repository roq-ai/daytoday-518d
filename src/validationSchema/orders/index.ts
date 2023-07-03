import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  product_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
