import * as yup from 'yup';

export const analyticsValidationSchema = yup.object().shape({
  views: yup.number().integer().required(),
  clicks: yup.number().integer().required(),
  sales: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
});
