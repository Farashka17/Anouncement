
import { create } from "zustand";

const useStore = create((set) => ({
  selectedCategoryId: "",
//   selectedColorId: "",
//   selectedSizeId: "",
//   selectedMaterialId: "",
  isLogin: false,
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),
//   setSelectedColorId: (id) => set({ selectedColorId: id }),
//   setSelectedSizeId: (id) => set({ selectedSizeId: id }),
//   setSelectedMaterialId: (id) => set({ selectedMaterialId: id }),
  resetFilters: (id) =>
    set({
      selectedCategoryId: ""
//       selectedColorId: "",
//       selectedSizeId: "",
//       selectedMaterialId: "",
    }),
  setLogin: (id) => set({ isLogin: true }),
  setLogout: (id) => set({ isLogin: false }),
  setFields: (fields) => set((state) => ({ ...state, ...fields })),
}));
export default useStore;