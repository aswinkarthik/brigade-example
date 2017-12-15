const { events, Job } = require('brigadier');

const testJob = new Job("test", "node:latest");
testJob.tasks = [
  "cd /src/",
  "yarn install",
  "yarn test"
]

events.on("exec", async (brigadeEvent, project) => {
  await testJob.run();
  console.log("Done running")
});

events.on("push", async (brigadeEvent, project) => {
  await testJob.run();
  console.log("Push Job done")
});
