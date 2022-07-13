import {
  Button,
  Card,
  CardDate,
  CardHeading,
  CardsHeading,
  CardsIntro,
  CardsList,
  CardText,
  Container,
  Heading,
  Subtitle,
  Top,
  Wrapper,
} from './style';

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>
            Когнитивные технологии,
            <br />
            <span>
              машинное
              <br /> обучение
            </span>
          </Heading>
          <Subtitle>Системы прикладного искусственного интеллекта</Subtitle>
          <Button>НАШИ ПРОЕКТЫ</Button>
        </Top>
        <CardsHeading>Несколько слов о нас</CardsHeading>
        <CardsIntro>
          Национальный центр когнитивных разработок – центр национальной
          технологической инициативы (НТИ), получивший государственную поддержку
          по направлению «Технологии машинного обучения и когнитивные
          технологии».
        </CardsIntro>
        <CardsList>
          <Card>
            <CardDate>Понедельник, 5 июля 2021г</CardDate>
            <CardHeading>
              ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…
            </CardHeading>
            <CardText>
              Университет ИТМО провел научно-исследовательскую стажировку для
              группы магистрантов из Евразийского национального университета
              имени Л.Н. Гумилева. Ведущие преподаватели в течение десяти дней
              рассказывали им об основах машинного обучения.{' '}
            </CardText>
          </Card>
          <Card>
            <CardDate>Понедельник, 5 июля 2021г</CardDate>
            <CardHeading>
              ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…
            </CardHeading>
            <CardText>
              Университет ИТМО провел научно-исследовательскую стажировку для
              группы магистрантов из Евразийского национального университета
              имени Л.Н. Гумилева. Ведущие преподаватели в течение десяти дней
              рассказывали им об основах машинного обучения.{' '}
            </CardText>
          </Card>
          <Card>
            <CardDate>Понедельник, 5 июля 2021г</CardDate>
            <CardHeading>
              ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…
            </CardHeading>
            <CardText>
              Университет ИТМО провел научно-исследовательскую стажировку для
              группы магистрантов из Евразийского национального университета
              имени Л.Н. Гумилева. Ведущие преподаватели в течение десяти дней
              рассказывали им об основах машинного обучения.{' '}
            </CardText>
          </Card>
          <Card>
            <CardDate>Понедельник, 5 июля 2021г</CardDate>
            <CardHeading>
              ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…
            </CardHeading>
            <CardText>
              Университет ИТМО провел научно-исследовательскую стажировку для
              группы магистрантов из Евразийского национального университета
              имени Л.Н. Гумилева. Ведущие преподаватели в течение десяти дней
              рассказывали им об основах машинного обучения.{' '}
            </CardText>
          </Card>
          <Card>
            <CardDate>Понедельник, 5 июля 2021г</CardDate>
            <CardHeading>
              ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…
            </CardHeading>
            <CardText>
              Университет ИТМО провел научно-исследовательскую стажировку для
              группы магистрантов из Евразийского национального университета
              имени Л.Н. Гумилева. Ведущие преподаватели в течение десяти дней
              рассказывали им об основах машинного обучения.{' '}
            </CardText>
          </Card>
        </CardsList>
      </Wrapper>
    </Container>
  );
};

export default About;
