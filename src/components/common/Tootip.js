export default function Tootip({ title }) {
  return (
    <div className="hidden group-hover:block absolute z-10 top-3 right-3 bg-t_main text-main rounded-xl px-3 py-1 text-xs whitespace-nowrap text-left">
      {title}
    </div>
  );
}

// hidden
