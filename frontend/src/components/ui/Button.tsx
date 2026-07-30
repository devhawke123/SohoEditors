import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const TEXT_SIZES = {
  sm: "text-btn-sm",
  md: "text-btn",
  nav: "text-nav",
  lg: "text-[clamp(1.125rem,1.2vw+0.5rem,1.375rem)]",
} as const;

const COLORS = {
  brand: {
    solid: "bg-brand text-white border-transparent",
    outline: "border border-brand bg-transparent text-brand",
  },
  black: {
    solid: "bg-black text-white border-transparent",
    outline: "border border-black bg-transparent text-black",
  },
  "brand-soft": {
    solid: "bg-brand-soft text-white border-transparent",
    outline: "border border-brand-soft bg-transparent text-brand-soft",
  },
  white: {
    solid: "bg-white text-brand border-transparent",
    outline: "border border-white bg-transparent text-white",
  },
} as const;

const PADDING = {
  sm: "px-4 py-2.5",
  md: "px-btn-x py-btn-y",
  nav: "px-btn-x py-btn-y",
  lg: "px-btn-x py-btn-y",
} as const;

const RADIUS = {
  sm: "rounded-md",
  md: "rounded-[10px]",
  nav: "rounded-[10px]",
  lg: "rounded-[10px]",
} as const;

const WEIGHTS = {
  bold: "font-bold",
  medium: "font-medium",
  normal: "font-normal",
} as const;

export type ButtonColor = keyof typeof COLORS;
export type ButtonTextSize = keyof typeof TEXT_SIZES;
export type ButtonVariant = "solid" | "outline";
export type ButtonWeight = keyof typeof WEIGHTS;

type CommonProps = {
  children: ReactNode;
  /** Fill style — solid (default) or outline. */
  variant?: ButtonVariant;
  /** Background / border palette. */
  color?: ButtonColor;
  /** Design-token label size (`sm` → text-btn-sm, `md` → text-btn, …). */
  textSize?: ButtonTextSize;
  /** Override label color only (Tailwind class, e.g. `text-white`). */
  textColor?: string;
  weight?: ButtonWeight;
  fullWidth?: boolean;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "className"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function buildClassName({
  variant = "solid",
  color = "brand",
  textSize = "md",
  textColor,
  weight = "bold",
  fullWidth,
  className,
}: CommonProps) {
  return [
    "inline-flex items-center justify-center text-center transition-opacity hover:opacity-90",
    WEIGHTS[weight],
    RADIUS[textSize],
    PADDING[textSize],
    TEXT_SIZES[textSize],
    COLORS[color][variant],
    textColor,
    fullWidth ? "w-full" : "w-fit",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  const {
    children,
    variant,
    color,
    textSize,
    textColor,
    weight,
    fullWidth,
    className,
  } = props;
  const classes = buildClassName({
    children,
    variant,
    color,
    textSize,
    textColor,
    weight,
    fullWidth,
    className,
  });

  if ("href" in props && props.href != null) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const {
    type = "button",
    // strip style props so they aren't forwarded to the DOM
    variant: _v,
    color: _c,
    textSize: _ts,
    textColor: _tc,
    weight: _w,
    fullWidth: _fw,
    className: _cl,
    children: _ch,
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
