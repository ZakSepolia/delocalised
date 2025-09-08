import { createSlice } from "@reduxjs/toolkit";

export interface ApplicationState {
	readonly blockNumber: { readonly [chainId: number]: number };
}

const initialState: ApplicationState = {
	blockNumber: {},
};

const applicationSlice = createSlice({
	name: "application",
	initialState,
	reducers: {
		updateBlockNumber(state, action) {
			const { chainId, blockNumber } = action.payload;
			if (typeof state.blockNumber[chainId] !== "number") {
				state.blockNumber[chainId] = blockNumber;
			} else {
				state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId]);
			}
		},
	},
});

export const { updateBlockNumber } = applicationSlice.actions;
export default applicationSlice.reducer;
