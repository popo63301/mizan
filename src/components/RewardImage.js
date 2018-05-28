import React from 'react';
import has from 'lodash/has';

import Hassanat from '../../assets/svg/Hassanat';
import House from '../../assets/svg/House';
import Palm from '../../assets/svg/Palm';
import Quran from '../../assets/svg/Quran';
import Sayhat from '../../assets/svg/Sayhat';
import Treasure from '../../assets/svg/Treasure';
import Tree from '../../assets/svg/Tree';

const listImages = {
  hassanat: Hassanat,
  house: House,
  palm: Palm,
  quran: Quran,
  sayhat: Sayhat,
  treasure: Treasure,
  tree: Tree,
};

const RewardImage = ({ idReward, ...props }) => {
  if (has(listImages, idReward)) {
    return React.createElement(listImages[idReward], { ...props });
  }
  return null;
};

export default RewardImage;
