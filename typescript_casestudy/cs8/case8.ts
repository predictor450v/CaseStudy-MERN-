
type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

const profile1: Profile = {
  username: "alice_dev",
  bio: null,
};

const profile2: Profile = {
  username: "bob_codes",
  bio: "Full-stack developer who loves TypeScript.",
  avatarUrl: "https://share.google/48TjUqbTENPeOLYfY",
};

function showProfile(profile: Profile): void {
  const DEFAULT_BIO = "No bio provided.";
  const DEFAULT_AVATAR = "https://share.google/48TjUqbTENPeOLYfY";

  console.log("Username:", profile.username);
  console.log("Bio:", profile.bio !== null ? profile.bio : DEFAULT_BIO);
  console.log("Avatar:", profile.avatarUrl !== undefined ? profile.avatarUrl : DEFAULT_AVATAR);
}

showProfile(profile1);

showProfile(profile2);
