interface Props {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className = "" }: Props) => {
  return <main className={className}>{children}</main>;
};
