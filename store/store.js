
import { create } from "zustand";

const useStore = create((set) => ({
  selectedCategoryName: "",
//   selectedColorId: "",
//   selectedSizeId: "",
//   selectedMaterialId: "",
  isLogin: false,
  setSelectedCategoryName: (name) => set({ selectedCategoryName: name }),
//   setSelectedColorId: (id) => set({ selectedColorId: id }),
//   setSelectedSizeId: (id) => set({ selectedSizeId: id }),
//   setSelectedMaterialId: (id) => set({ selectedMaterialId: id }),
  resetFilters: (name) =>
    set({
      selectedCategoryName: ""
//       selectedColorId: "",
//       selectedSizeId: "",
//       selectedMaterialId: "",
    }),
  setLogin: (id) => set({ isLogin: true }),
  setLogout: (id) => set({ isLogin: false }),
  setFields: (fields) => set((state) => ({ ...state, ...fields })),
}));
export default useStore;