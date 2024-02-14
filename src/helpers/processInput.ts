/*
  Clip possibly unnecessary elements, adjust array for multi word queries and extract user input
*/

export const processInput = (searchInput: string) => {
    const results_array = searchInput.replace(/: */g, ":").replace(/ *group*/g, " group").trim().split(" ");
    let clipped_results = [];

    for (let i = 0; i < results_array.length; i++) {
      clipped_results.push(results_array[i]);
      if (results_array[i].includes("group:")) {
        break;
      }
    }

    if (clipped_results.length > 2) {
      clipped_results[0] = clipped_results.slice(0, -1).join(" ");
    }

    const searchValue = clipped_results[0].split(":")[1];
    const groupValue = clipped_results[clipped_results.length - 1].split(":")[1];

    return [searchValue, groupValue]
}