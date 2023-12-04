import GithubProvider from 'next-auth/provider/github';
import GoogleProvider from 'next-auth/provider/google';

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log('Profile Github: ', profile);
      },
    }),
  ],
};
