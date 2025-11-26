import React from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
	/**
	 * セレクトボックスのオプション
	 */
	options: SelectOption[];
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
	 * プレースホルダー
	 */
	placeholder?: string;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLSelectElement>;
}

function Select({ className, options, error, label, required, id, placeholder, ref, ...props }: SelectProps) {
	const selectId = React.useId();
	const finalId = id || selectId;

	return (
		<div className="space-y-2">
			{label && (
				<label htmlFor={finalId} className="block text-sm font-medium">
					{label}
					{required && <span className="text-accent ml-1">*</span>}
				</label>
			)}
			<select
				ref={ref}
				id={finalId}
				className={cn(
					"w-full px-3 py-2 border rounded transition-colors appearance-none bg-white",
					"focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
					"disabled:bg-gray-100 disabled:cursor-not-allowed",
					"bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3cpath%20fill%3D%22%23333%22%20d%3D%22M10.293%203.293L6%207.586%201.707%203.293A1%201%200%2000.293%204.707l5%205a1%201%200%20001.414%200l5-5a1%201%200%2010-1.414-1.414z%22%2F%3E%3c%2Fsvg%3E')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1rem_1rem] pr-10",
					error ? "border-accent" : "border-border",
					className
				)}
				aria-invalid={error ? "true" : "false"}
				aria-describedby={error ? `${finalId}-error` : undefined}
				required={required}
				{...props}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value} disabled={option.disabled}>
						{option.label}
					</option>
				))}
			</select>
			{error && (
				<p id={`${finalId}-error`} className="text-sm text-accent">
					{error}
				</p>
			)}
		</div>
	);
}

export { Select };
