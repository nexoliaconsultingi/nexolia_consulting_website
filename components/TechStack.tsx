
// components/TechStack.tsx
import React, { useState } from 'react';

interface Technology {
    name: string;
    logo: string;
    category: string;
    description: string;
}

interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
}

const TechStack: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const colors = {
        rose1: '#ab6077',
        rose2: '#b05f76',
        sage: '#53828a',
        textPrimary: '#1a1a1a',
        textSecondary: '#4a5568',
        cardBg: '#ffffff',
    };

    const categories: Category[] = [
        { id: 'all', name: 'Toutes', icon: '🎯', color: colors.sage },
        { id: 'frontend', name: 'Front-End', icon: '🎨', color: colors.rose1 },
        { id: 'backend', name: 'Back-End', icon: '⚙️', color: colors.rose2 },
        { id: 'web', name: 'Applications Web', icon: '🌐', color: colors.sage },
        { id: 'mobile', name: 'Applications Mobile', icon: '📱', color: colors.rose1 },
        { id: 'microsoft', name: 'Microsoft 365 & Power Platform', icon: '☁️', color: colors.rose2 },
        { id: 'network', name: 'Infrastructure & Réseau', icon: '🔧', color: colors.sage },
    ];

     const technologies: Technology[] = [
        // Front-End
        {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            category: 'frontend',
            description: 'Bibliothèque JavaScript pour interfaces utilisateur'
        },
        {
            name: 'Next.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            category: 'frontend',
            description: 'Framework React pour production'
        },
        {
            name: 'TypeScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            category: 'frontend',
            description: 'JavaScript typé pour applications robustes'
        },
        {
            name: 'Vue.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            category: 'frontend',
            description: 'Framework progressif JavaScript'
        },
        {
            name: 'Angular',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
            category: 'frontend',
            description: 'Platforme d\'applications web'
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg',
            category: 'frontend',
            description: 'Framework CSS utilitaire'
        },

        // Back-End
        {
            name: 'Node.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            category: 'backend',
            description: 'JavaScript runtime pour le backend'
        },
        {
            name: 'Python',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            category: 'backend',
            description: 'Langage polyvalent pour backend'
        },
        {
            name: 'Java',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            category: 'backend',
            description: 'Langage robuste pour systèmes d\'entreprise'
        },
        {
            name: 'PHP',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
            category: 'backend',
            description: 'Langage populaire pour le web'
        },
        {
            name: 'GraphQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
            category: 'backend',
            description: 'Langage de requête pour APIs'
        },
        {
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            category: 'backend',
            description: 'Base de données NoSQL'
        },
        {
            name: 'PostgreSQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            category: 'backend',
            description: 'Base de données relationnelle'
        },

        // Applications Web
        {
            name: 'Docker',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            category: 'web',
            description: 'Conteneurisation d\'applications'
        },
        {
            name: 'Kubernetes',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            category: 'web',
            description: 'Orchestration de conteneurs'
        },
        {
            name: 'AWS',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVFqDCyx8R49ODCOqcjNcg_u1-EpMlR-tLw&s',
            category: 'web',
            description: 'Cloud computing Amazon'
        },
        {
            name: 'Azure',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            category: 'web',
            description: 'Cloud computing Microsoft'
        },
        {
            name: 'Jenkins',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
            category: 'web',
            description: 'Intégration continue'
        },

        // Applications Mobile
        {
            name: 'React Native',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            category: 'mobile',
            description: 'Applications mobiles natives React'
        },
        {
            name: 'Flutter',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            category: 'mobile',
            description: 'Framework UI multi-plateforme'
        },
        {
            name: 'Swift',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
            category: 'mobile',
            description: 'iOS application development'
        },
        {
            name: 'Kotlin',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
            category: 'mobile',
            description: 'Android application development'
        },

        // Microsoft 365 & Power Platform
        {
            name: 'Microsoft 365',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdDotSY-rWZ5xxMLwZ9IjPMKat9_e3k9CEg&s',
            category: 'microsoft',
            description: 'Suite collaborative d\'entreprise'
        },
        {
            name: 'Power Automate',
            logo: 'data:image/jpeg;base64,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',
            category: 'microsoft',
            description: 'Automatisation des workflows'
        },
        {
            name: 'Power BI',
            logo: 'data:image/jpeg;base64,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',
            category: 'microsoft',
            description: 'Business intelligence et analytics'
        },
        {
            name: 'SharePoint',
            logo: 'data:image/png;base64,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',
            category: 'microsoft',
            description: 'Gestion documentaire collaborative'
        },
        {
            name: 'Power Apps',
            logo: 'data:image/jpeg;base64,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',
            category: 'microsoft',
            description: 'Applications métier low-code'
        },

        {
            name: 'Dataverse',
            logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDRAPDw8NEA8PDQ8QDhAQDw8PEA4QFxUXFxYVFRUYHyggGBolGxUVITEhJSkrLi4wFx81ODMsNygvMCsBCgoKDg0OGhAQFy0dHR0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGBAUHAwj/xABFEAABAwICBggCCAMECwAAAAABAAIDBBEFIQYSMUFRYQcTIjJxgZGhQsEUUmJygpKisSPC0RUkM0MXNFNjc5Oy0uHw8f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAxEQEAAgIABAMFBwUBAAAAAAAAAQIDEQQSITEFQVETMkJhcSJSgZGh0fAUI7HB4RX/2gAMAwEAAhEDEQA/AO4oBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAINNimlVDTEiWoj1xtYy8jweBDb287KTMOfJxWLH71lXrulCEZQU0r+cr2xj0Gt8ljzuO/ilfhrM/Xp+7TVHSZWu7kVKwc2yPPrrAeynNLnt4nlntEQwpOkHEjslib4Qs+d1OaWufEM8+cfkI+kPEhtkid96FvysrzSseIZ/WPyZ1N0oVbT/Egpnj7PWRn1uf2Tmltr4nkjvWJbzD+lClfYTwTQneW6szB6WPsrzOmniWOfeiY/VbMKx2kqx/d54pDa5aDZ4HNhs4eiyiYl2Y82PJ7s7bFVtCAQCBOIAuSABtJ2BCZ01dTpBTR5a5eRujGt77PdabcRSPPbjycdhp57+n80wnaWxbopPMtC1/1VfRo/8ATp92f0Th0rgPebKznYOHsb+yscVTzZV8SxT3iYbakr4ZheKRruIB7Q8Qcwt9b1t2l2Y82PJ7k7ZKybQgEAgEAgEAgEAgqOkOn1LTExw/3mYZEMdaJh+0/f4C/ksZs4M/H48fSv2p/nm51jWllbV3EkxZGf8AKivHHbgbZu8yVhM7eTl4vLl7zqPSGiUcwuiokoFdFK6BIouihryCCCQQbgg2IPEHcix6rZgHSHWUxDZj9KiG6Q2lA5SbT+K/ksotMO3Dx2SnS32o/V1DR7Sakr2Xgk7YF3wv7MrPFu8cxcLOJ29bDnplj7Mtyq3MLFMSjp2az83HuMG1x+Q5rXkyRSNy0cRxFcNdz38oUrEsVlnPbdZu5gyaPLeeZXn5Mtr93g5+JyZp+1PT08mCStbQiSgV0QNkLSHNJaRmCCQR4FWJ12WJmJ3Cz4JpRmI6kjPJsuy33/6+vFdeLiPK/wCb1eF8Q+HL+f7/ALrYux64QCAQCAQCDCxbFYKSEzTvDGDIb3Pdua0bypM6a8uWmOvNadOS6U6a1FaXRsvDTZjq2ntSD/eOG37oy8dq1zbbwuJ42+XpHSv+fqqyjjK6BEopEoFdFK6BXRSui6K6BXRUXFFKGpfE9skb3MkYbsewlrmnkQq2V3Wdw6rob0lMmb1FdZs7Wnq5Wizaggd0gZNefQ8tis31G5epj42Ip/c7x+v/AFGvrXzyOkeczsG5rdzRyXm3vN53LxsuW2W82sxSVi1ESgRKCN0CJVEboLfodjBd/dpDmBeEnaQNrPLaOV+C7OHy/DP4PY8P4nf9q34fsta63qhAIBAINTpJj8NBB1spu51xFED2pXcBwA3nd6AyZ00Z89cNea34R6uK45jU9bMZZ3XOYYwZMib9Vo+e0rXPV8/mzXy25rNddRpIlFRugEUropEoFdFIlFK6BXQRJRXm5yrKIeL3I2RDMw6Gw1ztds+6sZlzcRfc8seS2YLimtaKQ9r4HH4uR5rly49dYaqy3BK0MiugiSqESgiSgV0EoKh0b2yMNnMcHN8QrEzE7hlW00tFo7w6rSVDZYmSN7r2NcPML1azzRuH1FLxesWjzeyrMIBBgY5i0VFTvnlPZbk1o70jzsa3mf6ncpM6as2WuKk2s4ZjmMS1tQ6eY3ccmtHdjZua3l++ZWve3zmbLbLfms111GsroFdF0V0UXQK6KiSildAropXQIlU0i4oyiHk5yM4hGCPrHgbtrvBJkvbkrtt1g4BdFWfCa/rY8++3J3Pg5ceSnLLKJZpKwUroIkoESgiSgRKC96B1mvTviJzhfl9x9yPfWXdw1t116Pc8Nyc2Oafd/wB/yVnXS9EIE4gC5yAzJOwBBxDTnSQ19UdQn6NCS2AbncZDzO7lbmtUzt89xnEe2v07R2/dW7qOUroaK6KV0UroaK6KV0Da0nYCUJmI7pindyHmm2HtYBpzxCmz2sejzdA7kfNXbKMlXk8EbQVWysxPZ4uejOIeT3qtkQ2VFDqMz7zszy4BYTLizX5rfKGRdRqJQe9DVdVI1+7Y4cWnb/XyWN680aWFr1t642RFyBEoIkoESgiSiLBoLV6laGXymjc38Q7Q9g71XRw06vr1d/h1+XNr1j/roy73vhBR+lLHuophSxm0tSDr22tg2O/Mez4ayxtLz/EM3JTkjvb/AA5Fda3i6K6BXRSugV0UiUCCDJjp7Zuz5blNtNsno9iVGtsMJwSoqzeNto72Mr7hnl9Y+HssZtEN+LBa/bstlDoXTMF5nSTO3i5jZ6Nz91hN5dleFpHfq2seCUjdlNT+cbXH1NyseaW72dI+GBLgtI7bTU/lEwH1ATmlJx09IaLE9BKOUExdZA/cWOL2X5td8iFlGWYOSPJS8T0SqaR+vIGyQNzEsdyL7tdu1v7c1sjJEtWbda9HgHKvP0d0NESgV0VY8GqNeEA7WHV8t3tl5Lky11b6qzbrWFdBEuRCJQRJVGXg9R1dVA/6s8d/ulwDvYlZUnVoltwW5ctZ+cOvr1H1JOcACSQABck5ABB8/aUYua2tmqLnVc7ViB3RNyZluuMzzJWqZ2+c4jL7XJNvy+jVXUaSJRSugjdFK6AugzIYtUZ979lJlzXvzfRNzlGMQseiujf0i084PU37DNhmI3ng391ha2nbg4ff2rdl9Y0NAa0ANAAAAAAHADctW3f2MlE2iSohXU2bIlGO0T/9UFH0q0aEYdUUzbMGcsQ+Ab3M5cRu8Nm6l99JcuXFHeFTDltc2juohEorZ4BLaRzfrMv5g/8AkrVmjpsbwuXMiJKBXVESUCugi45c7ZeKE9nWv7Zb9lel7SH03t4azpIxT6NhkoabPqCKdn4r6/6A/wBllaejHjMnJin1no4dda3gldAkUroFdU0V0XTJpI/iPl/VSWnLb4YZDisWmIZ2j+GfS6lsZv1be3KR9Qbr8SbDz5LG06h0YcfPbr2dRaA0BrQA1oAaBkABsAC0PSBKCN1E2RKJsiVEK6JtG6m02RKm025ppXhQpajsC0Mt3Rjc0/EzyuLciF047c0ObJXUtQCtjUERl4S607OesP0la8nuyLESuVESUCugRKCJcgi4ojf/ANpuW7nd/t5efTHX61TT0wOUcTpXcC551R5gMP5l227urxG+7RX06ueXWDziJQRuquiui6K6Lo2C5A4lEmdRtsgLCw3LBxTO5283lGUQvugdJqUplPeneTf7DbtA9dY+a05J6vR4euq79VkutbdsiVERuibK6m02RKm02V0TaJKibK6ibaPTKk62iefihtK3wHe/ST6BbMVtWYW6w5w0rraJhO6jFkYcf48f3vkVhf3ZFjuuViiSgRcgjdAiUREuQb36E5buV3exlXOkGs63Fqo3uGSNiHLUaGkfmDvVdc92fF25s1vyV26OfRXRSuildArorIom3cTwHuVJac09NMxxWLnh4yFGcOqYEzUo6dvCniJ8S0E+5K5rT1l6VekQzbrE2V1NpsrqJsiVE2jdE2RKibK6m02V1EeVTGHxvYdj2OafAghInUm3HonZDwC9BqtD2uowZeFNvO3kHH2t81hkn7KT2b4lczFElAiUQiUESUEHnI+BRJ7Ovf2EOAXo+zfT+whwjGJterqH/XqZ3/me4/NHjZJ3eZ+csO6MSuildAiUUroM2hHZJ4uWMubN7z2cVGqHjIjOHVcEl1qOndxp4vXVF1yW7y74nozSVibRJUTZXUTZXRNo3U2myuohXUTZXRNoTSBrHOOxrXOPgBdI7jjsWweAXoylnsCo1y2eCMze/wAGj9z8lpyz5MbNoXLSwK6CN0CJQRJVGXg8PW1dPHt16iIH7usNb2usqRu0Q2Ya82StfWYdxXpvq3y8StT5wroESikSgSKV0GfR9weJ/dYz3cub3nq4qNcPGRGcL/oNW9ZRCO/age5h46pOs0+5H4Vy5Y1Z1VnosBK1LsrqbTZXTabK6hsrqJsrqJsrptNldRjtptLqwRUMufakHVM5l+R/TrHyWzDG7wte7mrF3EvQFRgsFHFqRtbv2u8Sue07nbXMvW6xQiUESUCJQRJRFn6OaTrMRa+2UET5PxEagH6ifJb+Hru+/R3+HY+bPv7sb/06yu59C+XCVqfOo3QK6LoroougV0Vn0Tux5lYz3cmaPtPYlRreT0ZQ2Oi+KilqgXm0UoDJTub9V/kfYla8lOaOjfSfJ0y64mWyuptNldE2V1E2V1NpsromyuomyuptNudaZ4sJ6gRMN4oCRcbHyfEfAWt68V3YKctdz3ltiNR9WjatzGWfhlPrO1j3W+7ty13tqNNdp03BctDWV0ESUQroI3QIuQdO6LsP1KWSoIznks3/AIcdwP1F/oF28PXVd+r3fC8XLjm/3p/SP+7XVdD03zFicXV1M8f1J5WfleR8lqeBeNWmPmxbohXQK6KV0CuiszD35OHMFY2c+eO0sq6xc6DlWUPCQI2VWrRHSgNDaWpdYCzYJXHIDcx53cj5cFzZsXxVbpjcbhdyVy7ato3U2myuomyJTabK6mzZXUTapaWaTBgdT07rym7ZZGnKIb2g/X/bx2dOHDv7VuzbSnnKkRtXYsyyqaAvdYeZ4BYzOmuZ03sTA1oaNgXPM7apkyVGJFyBXVESVBEuQetHTvmlZDGLvle1jfEm1zyG3yViNzqGVKTe0VjvLvOH0jYII4Wd2KNrG8SALXPMr06xqNQ+rx0ilYrHaGQqzfOunlL1OL1rONQ6T/mgS/zrXPd4vEV1ls0F1GoroESildAror1pJLPHA5JMdGvLXdWxJWDjIqK8JFWyrEmRvqsui2O1MMdnnrYb2jY89poG3Vfw3WN9mVlz5sdZnp0lMnLM/NbabSSlf3pOqdwl7A/N3fdc04rR2jbVyz9Wyjla4Xa5rhxaQ4eoWqdwwncCSQNF3EAcSQB7qMe7UV+lFHCDeZsjh8EP8V1+FxkPMhba4L28mcYrT5aVLGdLp5wWQgwRHIkG8rxzcO74D1XVj4etes9Zba0rX5yr7G2W9Zlm0tG5+exvE/JYWtENVrabiGNrBZo/qfFaJnbTM7TuohXQRLkREuQIlQRJVHQOizBNZ7q547LLx0997jk948B2fN3BdPD0+J6/hmDczln6R/v+fV0pdb2Qg4t01UOpiEM47tRTavi+N1j+l8awt3ebxtdWifVz26xcaN0UroC6qldArorZ08us0HfsPitc9HBkpy20m4qJEPB5Rsh5wQGWQMG/aeDd5SZ1G2zfLG1h6oAAAWAAAHALm208zyfGqsSw5cPjJvqAHiMis4vLZGSfVjvwhu0H1AKvtJX2sgYWfrD0V9ox9o9GYXxd6BYzkYzkZcNGxu654nNYTaZa5tLKCxYAlRES5AiURG6BEoI3QZ+A4VJW1LKePLWN3u2iOMd5x/8AdpAWdKzadQ3YMM5rxSP5DutBRsghZDENWONga0chx4nfdehEREah9RSkUrFa9oZCrIIKL0w4X12F9c0XdSytky29W7sPHh2mu/CsbdnNxVObHv0cLusHlldVSuhoropXQIlF09aWfUdn3Tt5c1JjbXlx80fNnvctbkiHhI9G2IbrB6XUj1yO0+x8G7h81pvbc6asltzr0Zrlg17QIRdoFqG0S1DYAQ2ajHYRCJQIlBElRCJQIlBElUSp4XyvbHG1z3vcGsa3MuJ3Jr0ZVrNp5axuZds0M0bbh9PY2dUSWdO8bL7mN+yPfM+Hfix8kfN9JwnDRgprznusC2OoIBB4VtKyaGSGQXjljfG8cWuBBHoUSY3GnzDi1A+lqZqaTvwyujcbW1rHJw5EWI8VrePenLaYlh3RiSBEoqJKBXRUXFFiHvTVXwu/CfksJhpyYvihsMOp+tlz7jc3c+A8/kVrvbUNFrctViuudzESgiSgRKCJKIV0CJQRJQRJQIlEK6CJcgiXIqdNA+WRscbHPkebMY0XLin0WlJvPLWNzLsehGh7KFnWy6r6p7e07a2EH4WfM7124sXL1nu+h4Tg4wxuetpWtbnaEAgEAg5Z0yaKl7RiUDbujaG1bQMzGO7L+HYeVjsaVjaPNx8Vi3HNDj91i4USUCuikikXIPJzkZRAp4JJpGRRMdJLI8MjY3Nz3HIAI2VruXaf9GklNQRGF/W1LY9aqYSLSPOZ6s8u6AdoF8jt15MUz1hr4rgJtHNTv6fsqTwWktcC1zSQ5pBDmkbQQdhXI8eY10RJQRuiIkoESgiSgRcgjdAiUES5BElAroNngOA1NdJqQMuAe3I64ij+87jyGazrSbTqG/Bw9806rH4+TsOi2itPh7Ox/EncLSTuADjyaPhby8L3XZjxxSPm9/h+Fphjp1n1b9bHSEAgEAgECc0EEEAgixBzBCDjWn/RjJE59ThzC+I3dJStF3xcTEPib9naN1xkMJrrs4s3D/FVy92RIORBIIORBG0EKOTWkSUESVFQcVViGRhmG1FXMIKaJ80rtjGDYOLicmt5mwRnWk2nUO89HHR5Hhg+kTlstc9ti4Zx07TtbHfaeLvIWF75xGndjxxVfFW1otItFqauGs8GOa1mzMsHcg4bHDx8iFrvjizl4jhMebrPSfVzPHdEqyju4s62If5sQLgB9pu1v7c1y3xWq8XPwWXF11uPWFf1lqchEoIkoIkoESgiSgiSgV1Rk4fh89S/q6eKSV28MbcN5uOxo5lIiZ7M8eK+SdUjboOj3Rlskr3339RE428HyfJvquinD/eerg8Mjvln8HRKSljhjbHExkcbRZrWANaPILpiIiNQ9WtYrGojUPZVkEAgEAgEAgEAgr+kOheH4gS6op29aR/jRkxS+bh3vxXUmIlrvirbvCi1/Qq0m9PXPaNzZoRIfzNLf2WPL82meFjylgN6FKi+dfABxEDyfTWCcsp/S/NusK6GKNhBqqmoqLbWMDaeM+Nru9HBXlZ14esd3QcHwalo4+qpYIoWbSGNsXHi521x5kkrLTfFYjszkUIBAINHi+iVDVXdJC1rztki/hvvxNsnHxBWu2Ktu8ObLwmHJ1tXr6x0VLEOjA5mnqgeDZmfzt/7Vqnh/SXBfwr7lvzaGq0AxNmyKOUcY5Wfz6pWucN48nNbw7PHaN/j+7XS6K4i3bR1H4Wh/wD0krH2d/Rqng88fBLzboxiB2UVV5xub+6ezt6JHCZp+CWXBoNijz/qpaOL5Im28ta/srGK8+TZHAZ5+H9Ybii6L6p3+NPBEPsB8rvTsj3WccPbzl0U8LvPvWiP1WfC+jeghsZetqHD/aO1WX+623oSVtrgrHfq7Mfh2Gvfr9VtpaaOJgZExkbBsaxoY0eQW2IiOkO6tYrGojT1VUIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIP/2Q==',
            category: 'microsoft',
            description: 'Data base cloud'
        },
        {
            name: 'Project',
            logo: 'data:image/png;base64,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',
            category: 'microsoft',
            description: 'Gestion des Projets PMP'
        },
        // Infrastructure & Réseau
        {
            name: 'Cisco',
            logo: 'data:image/png;base64,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',
            category: 'network',
            description: 'Solutions réseau et sécurité'
        },
        {
            name: 'Linux',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            category: 'network',
            description: 'Système d\'exploitation serveur'
        },
        {
            name: 'VMware',
            logo: 'data:image/png;base64,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',
            category: 'network',
            description: 'Virtualisation et cloud'
        },
        {
            name: 'Terraform',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
            category: 'network',
            description: 'Infrastructure as Code'
        },
        {
            name: 'Ansible',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
            category: 'network',
            description: 'Automatisation configuration'
        },
        {
            name: 'Zaabix',
            logo: 'data:image/png;base64,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',
            category: 'network',
            description: 'Monitoring et alerting'
        }
    ];

    const filteredTechnologies = selectedCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === selectedCategory);

    const getCategoryCount = (categoryId: string) => {
        if (categoryId === 'all') return technologies.length;
        return technologies.filter(tech => tech.category === categoryId).length;
    };

    // --- Données structurées JSON-LD ---
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Stack technologique',
        description: 'Technologies maîtrisées par nos experts pour vos projets.',
        numberOfItems: technologies.length,
        itemListElement: technologies.map((tech, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'SoftwareApplication',
                name: tech.name,
                description: tech.description,
                applicationCategory: tech.category,
                operatingSystem: 'All',
                url: undefined, // vous pouvez ajouter un lien vers la page de la tech si besoin
            },
        })),
    };

    return (
        <section aria-label="Notre stack technologique" className="w-full py-12">
            {/* Données structurées (invisible pour les humains, lu par les robots) */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* En-tête */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                    Notre Stack Technologique
                </h2>
                <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
                    Des technologies de pointe maîtrisées par nos experts pour vos projets
                </p>
                <div className="mt-4 h-1 w-20 mx-auto rounded-full"
                    style={{ background: `linear-gradient(90deg, ${colors.rose1}, ${colors.sage})` }} />
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => {
                    const isActive = selectedCategory === category.id;
                    const count = getCategoryCount(category.id);
                    return (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            aria-current={isActive ? 'page' : undefined}
                            title={`Filtrer par ${category.name}`}
                            className="group px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            style={{
                                backgroundColor: isActive ? category.color : 'transparent',
                                color: isActive ? 'white' : colors.textSecondary,
                                border: `2px solid ${category.color}`,
                                boxShadow: isActive ? `0 4px 12px ${category.color}40` : 'none',
                            }}
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.name}</span>
                            <span className="text-xs px-1.5 py-0.5 rounded-full"
                                style={{
                                    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${category.color}20`,
                                    color: isActive ? 'white' : category.color,
                                }}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Grille des technologies */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredTechnologies.map((tech, idx) => (
                    <div
                        key={`${tech.name}-${idx}`}
                        className="group relative p-4 rounded-xl transition-all duration-300 cursor-pointer"
                        style={{
                            backgroundColor: colors.cardBg,
                            border: `1px solid ${hoveredTech === tech.name ? colors.sage : '#e2e8f0'}`,
                            boxShadow: hoveredTech === tech.name ? `0 10px 25px -5px ${colors.sage}30` : '0 1px 3px rgba(0,0,0,0.05)',
                            transform: hoveredTech === tech.name ? 'scale(1.05)' : 'scale(1)',
                        }}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        {/* Logo optimisé */}
                        <div className="flex justify-center mb-3">
                            <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                <img
                                    src={tech.logo}
                                    alt={`Logo de ${tech.name} – technologie ${tech.category}`}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-w-full max-h-full object-contain"
                                    style={{ filter: hoveredTech === tech.name ? 'brightness(1.05)' : 'none' }}
                                />
                            </div>
                        </div>

                        {/* Nom */}
                        <h3 className="text-center font-semibold mb-1" style={{ color: colors.textPrimary }}>
                            {tech.name}
                        </h3>

                        {/* Description VISIBLE (SEO + accessibilité) */}
                        <p className="text-center text-xs mt-1 line-clamp-2" style={{ color: colors.textSecondary }}>
                            {tech.description}
                        </p>

                        {/* Indicateur de catégorie */}
                        <div className="mt-2 flex justify-center">
                            <span className="text-xs px-2 py-0.5 rounded-full"
                                style={{
                                    backgroundColor: `${categories.find(c => c.id === tech.category)?.color}15`,
                                    color: categories.find(c => c.id === tech.category)?.color,
                                }}>
                                {categories.find(c => c.id === tech.category)?.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTechnologies.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-lg" style={{ color: colors.textSecondary }}>
                        Aucune technologie trouvée dans cette catégorie
                    </p>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .grid > div {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default TechStack;

















