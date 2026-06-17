import { Badge, ShinyCard } from "@/infrastructure/libs";
import type { SkillGroup } from "../../types";

type SkillsGridProps = {
  groups: SkillGroup[];
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <ShinyCard className="p-6 text-center sm:text-left" key={group.title}>
          <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
            {group.items.map((skill) => (
              <Badge className="text-sm font-medium" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </ShinyCard>
      ))}
    </div>
  );
}
