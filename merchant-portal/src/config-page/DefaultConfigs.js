export const defaultConfigs = [
  {
    id: 0,
    name: "Round up to the nearest dollar",
    type: "single",
    options: [
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  {
    id: 1,
    name: "Donate a fixed amount",
    type: "single",
    options: [
      {
        type: "fixed",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  {
    id: 2,
    name: "Customer enters donation amount",
    type: "single",
    options: [
      {
        type: "input",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  {
    id: 3,
    name: "Multiple donation types",
    type: "multi_type",
    options: [
      {
        type: "fixed",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "fixed",
        donation_cents: 300,
        purchase_cents: 286,
        transaction_cents: 586,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "fixed",
        donation_cents: 500,
        purchase_cents: 286,
        transaction_cents: 786,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "input",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  {
    id: 4,
    name: "Multiple donation recipients",
    type: "multi_recipient",
    options: [
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 1,
          publicKey: "1",
          name: "American Red Cross",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 2,
          publicKey: "2",
          name: "Malaria Consortium",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  {
    id: 5,
    name: "Custom configurations",
    type: "custom",
    options: [
      {
        type: "fixed",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          publicKey: "0",
          name: "UNICEF",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "input",
        donation_cents: 500,
        purchase_cents: 286,
        transaction_cents: 786,
        recipient: {
          id: 1,
          publicKey: "1",
          name: "American Red Cross",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 2,
          publicKey: "2",
          name: "Malaria Consortium",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
];