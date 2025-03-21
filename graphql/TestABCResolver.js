const premiumAdjustments = [
  {
    id: '1',
    Comment: 'Initial premium adjustment',
    Total_Borrower_Fees: 300.0,
    CU_Retail_Rate: 5.5,
    Protected_Loan_Amount: 150000.0,
    Pay_Rate: 3.5,
    Premium_Due: 4500.0,
    Total_Amount: 154500.0,
  }
];

const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      return premiumAdjustments.find(adj => adj.id === id);
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      const index = premiumAdjustments.findIndex(adj => adj.id === input.id);
      if (index !== -1) {
        premiumAdjustments[index] = { ...premiumAdjustments[index], ...input };
        return premiumAdjustments[index];
      }
      throw new Error('Premium Adjustment not found');
    },
  },
};

export default resolvers;