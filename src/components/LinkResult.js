import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LinkResult = ({ inputValue, setShortenedLinks, shortenedLinks }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
      setShortenedLinks((prevLinks) =>
        prevLinks.map((link, index) =>
          index === prevLinks.length - 1
            ? { ...link, shortenedUrl: res.data.result.full_short_link }
            : link
        )
      );
      navigate('/logs'); // Navigate to logs page
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className='result'>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
