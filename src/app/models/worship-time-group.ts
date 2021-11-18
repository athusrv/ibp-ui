import {WorshipPeriod} from "./worship-period";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export class WorshipTimeGroup {
  title: string = '';
  subtitle: string = '';
  icon?: IconDefinition;
  decoration?: { color: string, background: string, boxShadow: string };

  periods: WorshipPeriod[] = []
}
