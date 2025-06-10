export const functionalityTest = (operation) => {
    console.log(`Accion realizada: ${operation}`);
};

export const propsButtonMasSolitario = { onclick: functionalityTest, operation: 'sum' };
export const propsButtonMenosSolitario = { onclick: functionalityTest, operation: 'rest' };
export const propsPanelSolitario = { numb: 0 };
export const propsPanelOperaciones = { value: 0, setValue: () => {} };
export const propsEmojiDisplay = { emoji: 0 };
export const propsPanelEmoji = {
  value: 0,
  classname: ""
};
export const propsPageEjemplo = {};  // vacío, pero lo dejamos explícito
