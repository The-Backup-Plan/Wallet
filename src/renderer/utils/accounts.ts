import {sign} from 'tweetnacl';

import {getKeyPairDetails} from 'renderer/utils/signing';

export const truncateLongText = (text: string): string => {
  const VISIBLE_COUNT = 7;
  if (text.length <= VISIBLE_COUNT * 2 + 1) {
    return text;
  }

  return `${text.slice(0, VISIBLE_COUNT)}...${text.slice(text.length - 1 - VISIBLE_COUNT)}`;
};

export const generateAccount = () => {
  const keyPair = sign.keyPair();
  return getKeyPairDetails(keyPair);
};
