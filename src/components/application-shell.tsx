import Image from "next/image";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const navigation = [
  { name: "Konfigurator", href: "/" },
  { name: "Pizzas", href: "/pizzas" },
];

export const ApplicationShell: FC<Props> = ({ children }) => (
  <>
    <div className="min-h-full">
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-8 w-8"
                  src="logo.svg"
                  alt="Your Company"
                  width={200}
                  height={200}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20 items-center pt-20">
            {children}
          </div>
        </div>
      </main>
    </div>
  </>
);
