export const geoFeatures = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Chest",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-75.0, 40.0],
              [-74.5, 40.0],
              [-74.5, 40.5],
              [-75.0, 40.5],
              [-75.0, 40.0],
            ],
          ],
        },
        id: "CHEST",
      },
      {
        type: "Feature",
        properties: {
          name: "Legs",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-80.0, 35.0],
              [-79.5, 35.0],
              [-79.5, 35.5],
              [-80.0, 35.5],
              [-80.0, 35.0],
            ],
          ],
        },
        id: "LEGS",
      },
      {
        type: "Feature",
        properties: {
          name: "Back",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-90.0, 30.0],
              [-89.5, 30.0],
              [-89.5, 30.5],
              [-90.0, 30.5],
              [-90.0, 30.0],
            ],
          ],
        },
        id: "BACK",
      },
      {
        type: "Feature",
        properties: {
          name: "Biceps",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-95.0, 40.0],
              [-94.5, 40.0],
              [-94.5, 40.5],
              [-95.0, 40.5],
              [-95.0, 40.0],
            ],
          ],
        },
        id: "BICEPS",
      },
      {
        type: "Feature",
        properties: {
          name: "Triceps",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-100.0, 35.0],
              [-99.5, 35.0],
              [-99.5, 35.5],
              [-100.0, 35.5],
              [-100.0, 35.0],
            ],
          ],
        },
        id: "TRICEPS",
      },
      // Add more workout features as needed with their respective coordinates
    ],
  };
  