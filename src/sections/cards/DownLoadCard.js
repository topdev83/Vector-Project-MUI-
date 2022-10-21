import MainCard from 'components/MainCard';
// import { useTheme } from '@emotion/react';
import { FolderAddFilled } from '@ant-design/icons';

export default function DownLoadCard() {
  // const theme = useTheme();
  return (
    <MainCard border={false} sx={{ width: '200px', height: '200px', background: '#1E1E35' }}>
      <span
        style={{
          background: '#191829',
          border: '1px',
          borderRadius: '50px',
          padding: '10px',
          fontSize: '50px',
          marginLeft: '45px'
        }}
      >
        <FolderAddFilled style={{ color: '#514F88', marginTop: '50px' }} />
      </span>
    </MainCard>
  );
}
