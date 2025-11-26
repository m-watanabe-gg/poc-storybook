import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * エラーメッセージ
	 */
	error?: string;
	/**
	 * ラベル
	 */
	label?: string;
	/**
	 * 必須フィールドか
	 */
	required?: boolean;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLInputElement>;
}

function Input({ className, error, label, required, id, ref, ...props }: InputProps) {
	const inputId = React.useId();
	const finalId = id || inputId;
	const [isFocused, setIsFocused] = useState(false);

	return (
		<motion.div
			className="space-y-2"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			{label && (
				<motion.label
					htmlFor={finalId}
					className="block text-sm font-medium"
					animate={{ color: isFocused ? "var(--color-primary)" : "inherit" }}
					transition={{ duration: 0.2 }}
				>
					{label}
					{required && <span className="text-accent ml-1">*</span>}
				</motion.label>
			)}
			<motion.div animate={{ scale: isFocused ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
				<input
					ref={ref}
					id={finalId}
					className={cn(
						"w-full px-3 py-2 border rounded transition-all duration-200",
						"focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
						"disabled:bg-gray-100 disabled:cursor-not-allowed",
						error ? "border-accent" : "border-border",
						className
					)}
					aria-invalid={error ? "true" : "false"}
					aria-describedby={error ? `${finalId}-error` : undefined}
					required={required}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					{...props}
				/>
			</motion.div>
			{error && (
				<motion.p
					id={`${finalId}-error`}
					className="text-sm text-accent"
					initial={{ opacity: 0, y: -5 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
				>
					{error}
				</motion.p>
			)}
		</motion.div>
	);
}

export { Input };
