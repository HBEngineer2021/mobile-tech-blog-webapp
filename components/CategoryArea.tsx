import Link from 'next/link';
import { Category } from '../types/category';

type Props = {
    categories: Array<Category>;
};

export function CategoryArea({
    categories,
}: Props) {
    return (
        <div className="container mt-10 inline-block">
            <div className="container mx-auto bg-[#0b5394ff] rounded">
                <div className="container pl-0 lg:pl-6 xl:pl-6 pt-0 lg:pt-6 xl:pt-6 text-[0px] lg:text-2xl xl:text-2xl font-semibold text-white">
                    #Category
                </div>
                <div className="container p-0 lg:p-6 xl:p-6 grid grid-cols-1 xl:grid-cols-2 gap-2">
                    {categories.map(category => (
                        <div className="p-0 lg:p-2 xl:p-2" key={category.id}>
                            <span className="inline-block bg-zinc-200 rounded-full px-0 lg:px-3 xl:px-3 py-0 lg:py-1 xl:py-1 text-[0px] lg:text-sm xl:text-sm font-semibold text-gray-700">
                                <Link href={`/category/${category.name}/`} passHref >
                                    <a>
                                        #{category.name}
                                    </a>
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}