import Route from "@ember/routing/route";

export default class ProgrammersRoute extends Route {
  model() {
    return ["Donald Knuth", "Steve Wozniak", "Linus Torvalds"];
  }
}
