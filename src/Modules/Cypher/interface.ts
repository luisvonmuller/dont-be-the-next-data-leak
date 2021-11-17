interface CypherField<T> {
  pseudoPublicKey: string;
  ownSecret: string,
  value: T; // 
}

export { CypherField };