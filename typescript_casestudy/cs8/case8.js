var profile1 = {
    username: "alice_dev",
    bio: null,
};
var profile2 = {
    username: "bob_codes",
    bio: "Full-stack developer who loves TypeScript.",
    avatarUrl: "https://share.google/48TjUqbTENPeOLYfY",
};
function showProfile(profile) {
    var DEFAULT_BIO = "No bio provided.";
    var DEFAULT_AVATAR = "https://share.google/48TjUqbTENPeOLYfY";
    console.log("Username:", profile.username);
    console.log("Bio:", profile.bio !== null ? profile.bio : DEFAULT_BIO);
    console.log("Avatar:", profile.avatarUrl !== undefined ? profile.avatarUrl : DEFAULT_AVATAR);
}
showProfile(profile1);
showProfile(profile2);
