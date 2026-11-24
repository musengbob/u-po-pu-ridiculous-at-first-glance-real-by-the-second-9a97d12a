import { mkdirSync, writeFileSync } from "node:fs";

// Ridiculous at First Glance, Real by the Second
// One sentence, 188 characters: a bizarre startup pitch that sounds like a
// joke until the business logic lands — brands pay, cities fix, everyone wins.
const ENTRY =
  "We sell naming rights to potholes: brands pay to sponsor the crater outside your office, and the city finally fixes it — because a pothole named after a burger chain gets filled in a week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
