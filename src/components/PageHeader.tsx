interface Props {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: Props) {
  return (
    <div className="mb-8 pb-6 border-b border-gray-100 dark:border-dark-600">
      {badge && (
        <span className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-3 inline-flex">
          {badge}
        </span>
      )}
      <h1 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
