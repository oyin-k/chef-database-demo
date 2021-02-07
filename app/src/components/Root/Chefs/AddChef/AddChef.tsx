import * as React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface AddChefProps {
  onAddChef: ({ name }: { name: string }) => Promise<void>;
}

const Button = styled.button`
  display: inline-block;
  font-family: inherit;
  font-weight: 300;
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

const Wrapper = styled.form`
  margin-top: 1rem;
`;

const TextField = styled.input`
  font-family: inherit;
  font-weight: 300;
  font-size: 1.2rem;
`;

const AddChef = ({ onAddChef: pushAddChef }: AddChefProps) => {
  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<{ name: string }>({ mode: "onChange" });

  const onSubmit = handleSubmit(async ({ name }) => {
    await pushAddChef({ name });
    reset();
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <TextField
        disabled={isSubmitting}
        name="name"
        placeholder="Chef name"
        ref={register({ required: true })}
        type="text"
      />
      <Button disabled={isSubmitting || !isValid} type="submit">
        Add Chef
      </Button>
    </Wrapper>
  );
};

export default AddChef;
