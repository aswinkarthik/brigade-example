const { events, Job, Group } = require('brigadier');

const createJob = ({id, name, image, tasks}) => {
  let job = new Job(`${name}-${id}`, image);
  job.tasks = tasks;
  return job;
};

const run = async () => {
  let group = new Group();
  group.add(createJob({
    id: 1,
    name: 'test-node',
    image: 'node:latest',
    tasks: [
      'cd /src/',
      'yarn install',
      'yarn test'
    ]
  }));

  await group.runAll();
};

events.on("exec", async (brigadeEvent, project) => {
  run();
  console.log("Done running")
});

events.on("push", async (brigadeEvent, project) => {
  run();
  console.log("Done running")
});
