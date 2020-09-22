/** @jsx jsx */
import { jsx } from "theme-ui";

import Heart from "./heart";
import Shield from "./shield";
import Stack from "./stack";
import Ship from "./ship";
import useShips from "../hooks/useShips";

const WIDTH = 480;
const HEIGHT = 640;

const Hud = ({ health, shields }) => (
  <g>
    <Stack count={health}>
      <Heart />
    </Stack>
    <g transform={`translate(${WIDTH - (32 + 8) * 3} 0)`}>
      <Stack count={shields} flipped>
        <Shield />
      </Stack>
    </g>
  </g>
);

const Battle = () => {
  const { player, enemy } = useShips();
  return (
    <div>
      <svg width={WIDTH} height={HEIGHT}>
        <Hud health={enemy.health} shields={enemy.shields} />
        <g transform={`translate(0 ${HEIGHT - 32})`}>
          <Hud health={player.health} shields={player.shields} />
        </g>
        <g transform={`translate(${WIDTH / 2 - 32}, ${HEIGHT / 6})`}>
          <Ship color={"heart"} flipped />
        </g>
        <g transform={`translate(${WIDTH / 2 - 32}, ${(HEIGHT * 5) / 6})`}>
          <Ship color={"bullet"} />
        </g>
      </svg>
    </div>
  );
};

export default Battle;
