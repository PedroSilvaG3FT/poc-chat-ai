import { cn } from "@/_core/components/lib/utils";

interface IProps {
  className?: string;
}
export default function MainHeader(props: IProps) {
  const { className } = props;

  return (
    <header className={cn("w-full h-16 px-6 flex items-center", className)}>
      <div>App header</div>
    </header>
  );
}
