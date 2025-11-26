import React from "react";
import { cn } from "@/lib/utils";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	/**
	 * ラジオボタンのラベル
	 */
	label?: string;
	/**
	 * 説明文
	 */
	description?: string;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLInputElement>;
}

function Radio({ className, label, description, id, ref, ...props }: RadioProps) {
	const radioId = React.useId();
	const finalId = id || radioId;

	return (
		<div className="flex items-start">
			<input
				ref={ref}
				type="radio"
				id={finalId}
				className={cn(
					"w-4 h-4 mt-1 rounded-full border transition-colors cursor-pointer",
					"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
					"checked:bg-primary checked:border-primary",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"border-border",
					className
				)}
				aria-describedby={description ? `${finalId}-description` : undefined}
				{...props}
			/>
			{(label || description) && (
				<div className="ml-3">
					{label && (
						<label htmlFor={finalId} className="text-sm font-medium cursor-pointer">
							{label}
						</label>
					)}
					{description && (
						<p id={`${finalId}-description`} className="text-sm text-gray-600 mt-1">
							{description}
						</p>
					)}
				</div>
			)}
		</div>
	);
}

export interface RadioGroupProps {
	/**
	 * ラジオグループのラベル
	 */
	label?: string;
	/**
	 * エラーメッセージ
	 */
	error?: string;
	/**
	 * 必須フィールドか
	 */
	required?: boolean;
	/**
	 * 子要素（Radioコンポーネント）
	 */
	children: React.ReactNode;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLDivElement>;
}

function RadioGroup({ label, error, required, children, ref }: RadioGroupProps) {
	const groupId = React.useId();

	return (
		<div ref={ref} className="space-y-2">
			{label && (
				<div className="block text-sm font-medium">
					{label}
					{required && <span className="text-accent ml-1">*</span>}
				</div>
			)}
			<div className="space-y-3" role="radiogroup" aria-labelledby={label ? groupId : undefined}>
				{children}
			</div>
			{error && <p className="text-sm text-accent">{error}</p>}
		</div>
	);
}

export { Radio, RadioGroup };
