import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    username: null,
    followers: null,
    public_repos: null,
    avatar_url: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { name, login, followers, public_repos, avatar_url } = action.payload;
            state.name = name;
            state.login = login;
            state.followers = followers;
            state.public_repos = public_repos;
            state.avatar_url = avatar_url;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;