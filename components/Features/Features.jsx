import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import Hr from '../Hr'

const features = [
    {
        name: 'lorem10',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AcademicCapIcon,
    },
    {
        name: 'lorem11',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AcademicCapIcon,
    },
    {
        name: 'lorem12',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AcademicCapIcon,
    },
    {
        name: 'lorem13',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AcademicCapIcon,
    },
]

export default function Features() {
    return (
        <div id='features' className="flex bg-gray-50 max-w-screen overflow-hidden">
            <div className="m-auto my-8 md:my-16 max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-indigo-600">Features</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-800 sm:text-4xl">
                        A better way to <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#347ced]'>Study.</span>
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-200">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}