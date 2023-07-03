const mapping: Record<string, string> = {
  analytics: 'analytics',
  businesses: 'business',
  orders: 'order',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
