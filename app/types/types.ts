export type ServicesPackagesType = {
  subtitle: string,
  description: string,
  services: string[],
}

export type ServiceItemType = {
  name: string;
  price: string;
}

export type ServicesType = {
  ndfl: ServiceItemType[],
  registration: ServiceItemType[],
  etcServices: ServiceItemType[],
} 