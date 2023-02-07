import { Ability, MongoQuery, Subject } from "@casl/ability";

type PossibleAbilities = [string, Subject];
type Conditions = MongoQuery;

const ability = new Ability<PossibleAbilities, Conditions>();

export { ability };
