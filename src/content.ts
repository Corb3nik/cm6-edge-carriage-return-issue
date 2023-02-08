export const createContent = () => {
  let content = "";
  content += "A\n".repeat(10);
  content += "A".repeat(50000);

  return content;
};
