import { describe, test, expect } from "vitest";
import { validate } from "/script/validate.js";
import {
  duplicate,
  duplicateAll,
  updateScore,
  sortScore,
} from "/script/playersLogic.js";

test("Ranking ordenado de mayor a menor", () => {
  const players = [
    { name: "sergi", score: 150 },
    { name: "rubén", score: 200 },
  ];

  const result = sortScore(players);

  expect(result[0].score).toBe(200);
  expect(result[1].score).toBe(150);
});

describe("duplicate", () => {
  test("devuelve true si el jugador ya existe", () => {
    const players = [{ name: "sergi", score: "150" }];

    expect(duplicate(players, "sergi")).toBe(true);
  });
  test("devuelve false si el jugador no existe", () => {
    const players = [{ name: "sergi", score: "150" }];

    expect(duplicate(players, "rubén")).toBe(false);
  });
});
