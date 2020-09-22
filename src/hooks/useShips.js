import { useState } from "react";
import { singletonHook } from "react-singleton-hook";

const init = {
  player: {
    health: 3,
    shields: 2,
    healing: false,
    shielding: false,
  },
  enemy: {
    health: 3,
    shields: 2,
    healing: false,
    shielding: false,
  },
};
const useShips = singletonHook(init, () => {
  const [ships, setShips] = useState(init);
  const { player, enemy } = ships;
  const actions = {
    damagePlayer: () =>
      setShips({
        ...ships,
        player: {
          ...player,
          health: player.health - 1,
        },
      }),
    damageEnemy: () =>
      setShips({
        ...ships,
        enemy: {
          ...enemy,
          health: enemy.health - 1,
        },
      }),
  };

  return {
    player,
    enemy,
    actions,
  };
});

export default useShips;
