import { Chef } from "#root/db/models";

const chefResolver = () => {
  return Chef.findAll();
};

export default chefResolver;
