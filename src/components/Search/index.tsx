import type { FormControlProps } from "react-bootstrap/esm/FormControl";
import Form from "react-bootstrap/Form";

type Props = {
  value: string;
  onChange: (val: string) => void;
} & Omit<FormControlProps, "onChange">;

export const Search = ({ value, onChange, ...props }: Props) => {
  return (
    <Form>
      <Form.Control onChange={(e) => onChange(e.target.value)} value={value} type="search" {...props} />
    </Form>
  );
};
