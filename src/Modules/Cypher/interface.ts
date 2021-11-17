interface CypherField<T> {
  pseudoPublicKey: Buffer;
  ownSecret: string,
  value: T; // 
}

export { CypherField };