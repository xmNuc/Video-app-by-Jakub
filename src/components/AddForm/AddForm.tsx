import React, { SyntheticEvent, useState } from 'react';
import { Button } from 'reactstrap';
import './AddForm.css';

export const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [form, setForm] = useState({
    url: '',
  });

  const saveAd = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      localStorage.setItem('form', JSON.stringify(form));
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (id) {
    return <h2>Youre url was succesfully added</h2>;
  }

  return (
    <>
      <div className="form-wrap">
        <form className="add-form" action="" onSubmit={saveAd}>
          <h1>Add video url</h1>
          <p>
            <label>
              Url: <br />
              <input
                type="url"
                name="url"
                required
                maxLength={99}
                value={form.url}
                onChange={(e) => updateForm('url', e.target.value)}
              />
            </label>
          </p>
          <Button text="Submit" />
        </form>
      </div>
    </>
  );
};
