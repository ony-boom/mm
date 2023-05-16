export const buttonsLikeClass = {
  full: "bg-white text-black rounded-full border-0 px-12 min-h-[42px] hover:bg-neutral-200 transition-all flex flex-col justify-center items-center",
  outlined:
    "border border-neutral-400 bg-transparent text-white rounded-full px-12 min-h-[42px] hover:border-white transition-all flex flex-col justify-center items-center",
};

export type ButtonsVariant = keyof typeof buttonsLikeClass;
