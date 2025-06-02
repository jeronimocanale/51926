import ANSICListener from "./generated/ANSICListener.js";

export class CustomCalculatorListener extends ANSICListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}