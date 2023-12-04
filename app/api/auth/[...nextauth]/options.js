import GithubProvider from 'next-auth/provider/github';
import GoogleProvider from 'next-auth/provider/google';

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log('Profile Github: ', profile);

        let userRole = 'Github User';
        if (profile?.email === 'tin.jurcevic@gmail.com') {
          userRole = 'admin';
        }
        return {
          ...profile,
          role: userRole,
        };
      },
    }),
  ],
};
