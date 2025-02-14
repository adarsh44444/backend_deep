const apiEndpoints = [
  { method: "POST", url: "/api/tutorials", action: "create a new tutorial", score: 0.25 },
  { method: "POST", url: "/api/tutorials/:id/comments", action: "create a new Comment for a Tutorial", score: 0.25 },
  { method: "GET",  url: "/api/tutorials/:id/comments", action: "retrieve all Comments of a Tutorial", score: 0.25 },
  { method: "GET",  url: "/api/comments/:id", action: "retrieve a Comment by :id", score: 0.5 },
  { method: "PUT",  url: "/api/comments/:id", action: "update a Comment by :id", score: 0.5 },
  { method: "DELETE", url: "/api/comments/:id", action: "delete a Comment by :id", score: 0.25 },
  { method: "DELETE", url: "/api/tutorials/:id", action: "delete a Tutorial (and its Comments) by :id", score: 0.5 },
  { method: "DELETE", url: "/api/tutorials/:id/comments", action: "delete all Comments of a Tutorial", score: 0.5 }
];