import { Badge, ShinyCard } from "@/infrastructure/libs";
import type { CaseStudyItem } from "../../types";

type CaseStudyCardProps = {
  caseStudy: CaseStudyItem;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <ShinyCard className="p-6 text-center sm:text-left">
      <h3 className="text-2xl font-semibold text-foreground">
        {caseStudy.title}
      </h3>
      <p className="mt-4 text-base leading-8 text-muted-700 dark:text-muted-700">
        {caseStudy.summary}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {caseStudy.metrics.map((metric) => (
          <div className="panel-gradient rounded-lg p-4" key={metric.label}>
            <Badge className="text-2xl" variant="panel">
              {metric.value}
            </Badge>
            <p className="mt-2 text-sm leading-6 text-muted-700 dark:text-muted-700">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </ShinyCard>
  );
}
