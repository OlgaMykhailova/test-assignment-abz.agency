export const loadUsers = async (
  setIsLoading,
  setUsers,
  setNextUrl,
  getUsers
) => {
  setIsLoading(true);
  try {
    const responseData = await getUsers();
    if (responseData.success !== true) {
      throw new Error(
        'Sorry, there are no users for display. Please try again later.'
      );
    }
    setUsers(responseData.users);
    setNextUrl(responseData.links.next_url);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    return error;
  }
};
