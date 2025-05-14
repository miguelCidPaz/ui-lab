export const functionalityTest = (operation) => {
    console.log(`Accion realizada: ${operation}`);
}


export const propsButtonMasSolitario = {onclick:functionalityTest, operation: 'sum'};
export const propsButtonMenosSolitario = {onclick:functionalityTest, operation: 'rest'};
export const propsPanelSolitario = {numb: 0};