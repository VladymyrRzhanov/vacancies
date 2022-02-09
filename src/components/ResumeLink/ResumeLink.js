import PropTypes from 'prop-types';
import { SuccessApply } from './styles';

const ResumeLink = ({ link }) => {
  return (
    //   <SuccessApply href={link}>Отправлено резюме</SuccessApply>;

    <SuccessApply
    //   icon={<DislikeBtn />}
    //   checkedIcon={<DislikeBtnChecked />}
    >
      Отправлено резюме
    </SuccessApply>
  );
};

ResumeLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ResumeLink;
