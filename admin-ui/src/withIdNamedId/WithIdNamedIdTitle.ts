import { WithIdNamedId as TWithIdNamedId } from "../api/withIdNamedId/WithIdNamedId";

export const WITHIDNAMEDID_TITLE_FIELD = "name";

export const WithIdNamedIdTitle = (record: TWithIdNamedId): string => {
  return record.name?.toString() || String(record.id);
};
