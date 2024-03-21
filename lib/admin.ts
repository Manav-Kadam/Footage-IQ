import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2duulNPdOoQ9YvQJUbEmp5YVdA1",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
