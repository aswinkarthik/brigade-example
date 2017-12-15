const { events, Job, Group } = require('brigadier');

const pipeline = () => {
  const testJob = new Job("test", "node:latest");
  testJob.tasks = [
    "cd /src/",
    "yarn install",
    "yarn test"
  ];

  const deployJob = new Job("deploy", "alpine:latest");

  deployJob.tasks = [
    'echo Deploy Job running'
  ];
  Group
    .runAll([ testJob, testJob, testJob ])
    .then(() => {
      deployJob.run();
    });
};

events.on("exec", async (brigadeEvent, project) => {
  pipeline();
  console.log("Done running")
});

events.on("push", async (brigadeEvent, project) => {
  pipeline();
});
