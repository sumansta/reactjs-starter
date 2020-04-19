import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Empty from 'components/common/empty/Empty';
import Loading from 'components/common/loading/Loading';

import history from 'utils/history';

import config from 'config';

const Table = ({
  data,
  columns,
  loading,
  minRows,
  showPagination,
  getTdProps,
  getTheadThProps,
  sortable,
  getTrProps,
  defaultSorted,
  style,
  getLink
}) => {
  minRows = minRows || 3;

  if (!loading && data && data.length === 0) {
    return <Empty />;
  }

  return (
    <ReactTable
      data={data}
      noDataText=""
      className="lf"
      columns={columns}
      loading={loading}
      minRows={minRows}
      pageSize={minRows}
      sortable={sortable}
      getTheadThProps={getTheadThProps}
      getTdProps={getTdProps}
      showPagination={showPagination}
      defaultSorted={defaultSorted}
      loadingText={<Loading />}
      style={style}
      getTrProps={(state, rowInfo) => {
        if (getTrProps) {
          return getTrProps(state, rowInfo);
        }

        if (!getLink) {
          return {};
        }

        return {
          onClick: e => {
            let link = getLink(rowInfo);

            if (e.ctrlKey || e.metaKey) {
              let newWindow = window.open(window.location.origin + config.basename.slice(0, -1) + link, '_blank');
              newWindow.opener = null;

              return;
            }

            history.push(link);
          }
        };
      }}
    />
  );
};

Table.defaultProps = {
  sortable: true
};

export default Table;