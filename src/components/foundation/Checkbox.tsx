import React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	/**
	 * チェックボックスのラベル
	 */
	label?: string;
	/**
	 * エラーメッセージ
	 */
	error?: string;
	/**
	 * 説明文
	 */
	description?: string;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLInputElement>;
}

function Checkbox({ className, label, error, description, id, ref, ...props }: CheckboxProps) {
	const checkboxId = React.useId();
	const finalId = id || checkboxId;

	return (
		<div className="flex items-center">
			<input
				ref={ref}
				type="checkbox"
				id={finalId}
				className={cn(
					"w-4 h-4 rounded border transition-colors cursor-pointer flex-shrink-0",
					"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
					"checked:bg-primary checked:border-primary",
					"disabled:cursor-not-allowed disabled:opacity-50",
					error ? "border-accent" : "border-border",
					className
				)}
				aria-invalid={error ? "true" : "false"}
				aria-describedby={error ? `${finalId}-error` : description ? `${finalId}-description` : undefined}
				{...props}
			/>
			{(label || description || error) && (
				<div className="ml-3 flex-1">
					{label && (
						<label htmlFor={finalId} className="text-sm font-medium cursor-pointer block">
							{label}
						</label>
					)}
					{description && (
						<p id={`${finalId}-description`} className="text-sm text-gray-600 mt-1">
							{description}
						</p>
					)}
					{error && (
						<p id={`${finalId}-error`} className="text-sm text-accent mt-1">
							{error}
						</p>
					)}
				</div>
			)}
		</div>
	);
}

export { Checkbox };
