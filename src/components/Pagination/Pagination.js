import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { getPage } from '../../redux/vacanciesPage/vacanciesPage-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { vacanciesPageActions } from '../../redux/vacanciesPage/vacanciesPage-actions';
import { PaginList } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      // marginTop: theme.spacing(2),
      minWidth: '20px',
    },
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const PagePagination = ({ totalPage }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const page = Number(useSelector(getPage));

  const pageSwitch = (e, value) => {
    dispatch(vacanciesPageActions(value));
  };

  return (
    <div className={classes.root}>
      <PaginList
        className={classes.ul}
        size="small"
        page={page}
        // color="secondary"
        count={Number(totalPage)}
        shape="rounded"
        onChange={pageSwitch}
      />
    </div>
  );
};

PagePagination.propTypes = {
  totalPage: PropTypes.node,
};

export default PagePagination;
