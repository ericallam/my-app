import { Job, eventTrigger } from "@trigger.dev/sdk";
import { client } from "@/trigger";

// your first job
new Job(client, {
  id: "example-job",
  name: "Example Job",
  version: "0.0.1",
  trigger: eventTrigger({
    name: "example.event",
  }),
  run: async (payload, io, ctx) => {
    await io.runTask("example.task", { name: "Task 1" }, async () => {});
    await io.runTask("example.task", { name: "Task 2" }, async () => {});
  },
});
