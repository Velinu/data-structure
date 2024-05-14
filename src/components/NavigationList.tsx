import { NavigationButton } from "./icons/NavButton";

export interface NavigationInterface {
  elements: Array<button>;
}

interface button {
  label: string;
  href: string;
}

export const Navigaton = (props: NavigationInterface) => {
  const { elements } = props;
  return (
    <nav>
      <ul className="text-primary">
        {elements.map((element: button) => (
          <li className="flex my-3">
            <NavigationButton />
            <a href={element.href} className="mx-2">
              {element.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
