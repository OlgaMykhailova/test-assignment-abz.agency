export const loadPositions = async (
  setIsLoading,
  getPositions,
  setPositions
) => {
  setIsLoading(true);
  try {
    const responseData = await getPositions();
    if (responseData.success !== true) {
      throw new Error(
        'Sorry, there are no positions for display. Please try again later.'
      );
    }
    setPositions(responseData.positions);
    setIsLoading(false);
  } catch (error) {}
};
