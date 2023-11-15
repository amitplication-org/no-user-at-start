import { MergeWhereInput } from "./MergeWhereInput";
import { MergeOrderByInput } from "./MergeOrderByInput";

export type MergeFindManyArgs = {
  where?: MergeWhereInput;
  orderBy?: Array<MergeOrderByInput>;
  skip?: number;
  take?: number;
};
