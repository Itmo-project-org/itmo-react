import {
  CardButton,
  CardIcon,
  CardText,
  CardTitle,
  IndustrialCard,
} from './styles';

const Card = ({ card, openPopup }) => {
  return (
    <IndustrialCard background={card.bg}>
      <CardTitle>{card.title}</CardTitle>
      <CardIcon alt={card.title} src={card.icon} />
      <CardText>{card.content}</CardText>
      <CardButton
        name="more"
        type="button"
        onClick={() => {
          openPopup(card);
        }}
      >
        Подробнее
      </CardButton>
    </IndustrialCard>
  );
};

export default Card;
