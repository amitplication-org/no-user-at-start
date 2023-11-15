import { Merge as TMerge } from "../api/merge/Merge";

export const MERGE_TITLE_FIELD = "name";

export const MergeTitle = (record: TMerge): string => {
  return record.name?.toString() || String(record.id);
};
