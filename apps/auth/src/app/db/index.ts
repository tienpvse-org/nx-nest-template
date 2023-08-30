import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | null | number | string;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface SchemaMigrations {
  version: string;
}

export interface User {
  id: Generated<string>;
  created_at: Generated<Timestamp | null>;
  updated_at: Timestamp | null;
  username: string;
  password: string;
  custom_data: Generated<Json | null>;
}

export interface DB {
  schema_migrations: SchemaMigrations;
  user: User;
}
