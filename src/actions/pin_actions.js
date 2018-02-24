export const PIN_MOD = "PIN_MOD";
export const UNPIN_MOD = "UNPIN_MOD";

export const pinMod = (mod) => {
  return {
    type: PIN_MOD,
    mod,
  };
};

export const unpinMod = (mod) => {
  return {
    type: UNPIN_MOD,
    mod,
  };
};
