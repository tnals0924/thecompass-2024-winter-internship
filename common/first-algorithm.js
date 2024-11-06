function friendRecommendations(network, user) {
  const validated = [];
  const queue = [user];
  const directFriends = network[user];
  const result = [];

  while (queue.length) {
    const current = queue.shift();

    // console.log(current);
    // console.log('validated: ',  validated);
    // console.log('result: ', result);

    if (validated.includes(current)) {
      //다음 루프로 이동
      //console.log('continue!');
      continue;
    }

    network[current]
      .filter(item => item !== user)
      .forEach((item) => {
        queue.push(item);
        result.push(item);
      });

    validated.push(current);
  }

  return result.filter((item) => !directFriends.includes(item));
}

const network = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "David"],
  Charlie: ["Alice", "Eve"],
  David: ["Bob"],
  Eve: ["Charlie"]
};

console.log(friendRecommendations(network, 'Alice'));
