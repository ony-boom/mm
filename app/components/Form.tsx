export function FormGroup({
  inputId,
  inputName,
  inputType,
  autoFocus,
  value,
  onChange,
  label,
  required,
  isTextArea,
}: FormGroupProps) {
  return (
    <div className="flex flex-col gap-2 form-group flex-grow">
      <label htmlFor={inputId} className="text-neutral-400">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={inputName}
          id={inputId}
          rows={5}
          required={required}
          className="bg-transparent border rounded-md border-neutral-400 focus:border-white transition-all outline-0 p-2 flex-grow"
        />
      ) : (
        <input
          type={inputType}
          id={inputId}
          name={inputName}
          autoFocus={autoFocus}
          className="bg-transparent border-0 border-b border-b-neutral-400 focus:border-b-white transition-all outline-0 w-full flex-grow"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}

type FormGroupProps = {
  inputId: string;
  label: React.ReactNode;
  inputType?: React.HTMLInputTypeAttribute;
  inputName: string;
  autoFocus?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  isTextArea?: boolean;
};
