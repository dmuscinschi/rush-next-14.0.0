import { test } from '@shared/ui/src/test';

export const script = () => {
  console.log('CUSTOM_SCRIPT');

  const result = test();
  console.log({ result });
};
