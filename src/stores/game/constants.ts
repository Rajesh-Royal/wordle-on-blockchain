import { makeEmptyGrid } from "./helpers";
import type { GameStatus } from "./types";

export const APP_NAME = "WordlEther";

const EMPTY_GRID = makeEmptyGrid();

export const STORAGE_KEY = "@stores/game/1";

export type ModalKind = "help" | "stats" | "settings" | "dapp" | null;

export const INITIAL_STATE = {
  grid: EMPTY_GRID,
  cursor: { y: 0, x: 0 },
  secret: "",
  isLoading: false,
  status: "new" as GameStatus,
  activeModal: null as ModalKind,
  darkMode: false,
};
