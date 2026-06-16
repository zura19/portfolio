import { Badge } from "@/infrastructure/libs";
import type { SkillGroup } from "../../types";

type SkillsGridProps = {
  groups: SkillGroup[];
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <article
          className="card-gradient rounded-lg border border-border-100 p-6 text-center shadow-sm sm:text-left"
          key={group.title}
        >
          <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
            {group.items.map((skill) => (
              <Badge className="text-sm font-medium" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
