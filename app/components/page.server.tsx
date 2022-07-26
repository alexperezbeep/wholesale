import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SectionLink } from '@/ui/SectionLink.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

export const getServerSideProps = () => {
  return {
    props: { categories: getCategories() },
  };
};

export default function Page({ categories }: { categories: Category[] }) {
  return (
    <div className="space-y-12">
      <Boundary>
        <div className="space-y-4">
          <div className="text-xl font-medium text-zinc-500">Home</div>
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category) => {
              return (
                <SectionLink
                  key={category.slug}
                  href={`/layouts/${category.slug}`}
                  text={category.name}
                >
                  <SkeletonCard />
                </SectionLink>
              );
            })}
          </div>
        </div>
      </Boundary>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            This example shows how moving components to Server Components will
            reduce the amount of JavaScript sent to the client.
          </li>
        </ul>
      </div>
    </div>
  );
}
