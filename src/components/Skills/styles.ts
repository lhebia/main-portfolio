import styled from '@emotion/styled';

export const SkillsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    li {
        text-align: center;
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    @media (max-width: 320px) {
        grid-template-columns: 1fr;
    }
`;

export const SkillsLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        padding-left: 0.5rem;
    }
`;
