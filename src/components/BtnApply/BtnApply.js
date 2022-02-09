import { useDispatch } from 'react-redux';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as applyCardsActions from '../../redux/applyCards/applyCards-actions';
import { ReactComponent as Apply } from '../../assets/images/apply.svg';
import { Widget } from '@uploadcare/react-widget';
import { ButtonApply, ApplyText, Uploader } from './styles';

const BtnFav = ({ onChange, cardId }) => {
  // const [error, setError] = useState(initial);
  const widgetApi = useRef();
  const dispatch = useDispatch();

  const addToApply = (fileInfo, id) => {
    const { cdnUrl } = fileInfo;
    return dispatch(applyCardsActions.addApplyCards({ id, cdnUrl }));
  };

  const fileSizeLimit = max => {
    return function (fileInfo) {
      if (fileInfo.size === null) {
        return;
      }
      if (max && fileInfo.size > max) {
        onChange();
        throw new Error('error');
      }
    };
  };

  const validators = [fileSizeLimit(2097152)];
  const errors = {
    errors: {
      dimensions:
        'Ёлки-палки, этот файл просто огромный и не помещается в наш сервер',
    },
    dialog: {
      tabs: {
        preview: {
          error: {
            dimensions: {
              // title: 'Title.',
              text: 'Ёлки-палки, этот файл просто огромный и не помещается в наш сервер',
              back: 'Back',
            },
          },
        },
      },
    },
  };

  return (
    <>
      <ButtonApply onClick={() => widgetApi.current.openDialog()}>
        <Apply />
        <ApplyText>Откликнуться</ApplyText>
      </ButtonApply>
      <Uploader>
        <Widget
          publicKey="demopublickey"
          imagesOnly
          // previewStep
          validators={validators}
          localeTranslations={errors}
          ref={widgetApi}
          onChange={fileInfo => {
            addToApply(fileInfo, cardId);
          }}
        />
      </Uploader>
    </>
  );
};

BtnFav.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default BtnFav;
