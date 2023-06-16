import Form from "react-bootstrap/Form";

type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const Search = ({ value, placeholder, onChange }: Props) => {
  return (
    <Form>
      <Form.Control
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </Form>
  );
};
