import { WithIdNotNamedId as TWithIdNotNamedId } from "../api/withIdNotNamedId/WithIdNotNamedId";

export const WITHIDNOTNAMEDID_TITLE_FIELD = "name";

export const WithIdNotNamedIdTitle = (record: TWithIdNotNamedId): string => {
  return record.name?.toString() || String(record.id);
};
