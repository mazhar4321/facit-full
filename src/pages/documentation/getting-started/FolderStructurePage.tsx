import React, { useState } from 'react';
import Card, {
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { gettingStartedPagesMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Visible from '../../../components/extras/Visible';

type TStarterItems = 'Create React App' | 'Vite' | 'NextJs';
type TStarter = { [key: string]: TStarterItems };

const FolderStructurePage = () => {
	const STARTER_PACKAGES: TStarter = {
		cra: 'Create React App',
		vite: 'Vite',
		nextjs: 'NextJs',
	};
	const [starterValue, setStarterValue] = useState<TStarterItems>(
		(localStorage.getItem('facit_docChooseStarter') as TStarterItems) || STARTER_PACKAGES.cra,
	);

	const TREE = {
		cra: `
facit
├── .storybook
├── node_modules
├── public
├── src
│   ├── App
│   │   └── App.tsx
│   ├── assets
│   ├── common
│   ├── components
│   ├── contexts
│   ├── helpers
│   ├── hooks
│   ├── layout
│   ├── pages
│   │   └── _layout
│   │       ├── _asides
│   │       ├── _footers
│   │       └── _headers
│   ├── routes
│   ├── stories
│   ├── styles
│   │   ├── components
│   │   ├── custom
│   │   ├── elements
│   │   ├── generic
│   │   ├── objects
│   │   ├── settings
│   │   ├── tools
│   │   ├── utilities
│   │   ├── vendors
│   │   └── style.scss
│   ├── type
│   ├── declaration.d.ts
│   ├── i18n.ts
│   ├── index.tsx
│   ├── lang.ts
│   ├── menu.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── steps.tsx
├── SvgIcons
│   └── custom-icon.svg
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── .svgrrc
├── package.json
├── README.md
└── tsconfig.json`,
		vite: `
facit
├── node_modules
├── public
├── src
│   ├── App
│   │   └── App.tsx
│   ├── assets
│   ├── common
│   ├── components
│   ├── contexts
│   ├── helpers
│   ├── hooks
│   ├── layout
│   ├── pages
│   │   └── _layout
│   │       ├── _asides
│   │       ├── _footers
│   │       └── _headers
│   ├── routes
│   ├── stories
│   ├── styles
│   │   ├── components
│   │   ├── custom
│   │   ├── elements
│   │   ├── generic
│   │   ├── objects
│   │   ├── settings
│   │   ├── tools
│   │   ├── utilities
│   │   ├── vendors
│   │   └── style.scss
│   ├── type
│   ├── declaration.d.ts
│   ├── i18n.ts
│   ├── index.tsx
│   ├── lang.ts
│   ├── menu.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── steps.tsx
├── SvgIcons
│   └── custom-icon.svg
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── .svgrrc
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts`,
		nextjs: `
facit
├── .next
├── assets
├── common
├── components
├── contexts
├── helpers
├── hooks
├── layout
├── node_modules
├── pages
│   └── _layout
│       ├── _asides
│       ├── _footers
│       └── _headers
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public
├── routes
├── styles
│   ├── components
│   ├── custom
│   ├── elements
│   ├── generic
│   ├── objects
│   ├── settings
│   ├── tools
│   ├── utilities
│   ├── vendors
│   └── style.scss
├── type
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── index.d.ts
├── lang.ts
├── menu.ts
├── next.config.ts
├── next-i18next.config.ts
├── package.json
├── README.md
├── steps.tsx
└── tsconfig.json`,
	};

	return (
		<PageWrapper title={gettingStartedPagesMenu.gettingStarted.subMenu.folderStructure.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: gettingStartedPagesMenu.gettingStarted.text,
								to: gettingStartedPagesMenu.gettingStarted.path,
							},
							{
								title: gettingStartedPagesMenu.gettingStarted.subMenu
									.folderStructure.text,
								to: gettingStartedPagesMenu.gettingStarted.subMenu.folderStructure
									.path,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<span>
						<i>Next step</i>
					</span>
					<Button
						tag='a'
						color='success'
						isLight
						icon={
							gettingStartedPagesMenu.gettingStarted.subMenu.bootstrapVariables.icon
						}
						to={`../${gettingStartedPagesMenu.gettingStarted.subMenu.bootstrapVariables.path}`}>
						{gettingStartedPagesMenu.gettingStarted.subMenu.bootstrapVariables.text}
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row h-100 align-content-start'>
					<div className='col-md-3'>
						<Card className='position-sticky sticky-top-size'>
							<CardHeader>
								<CardLabel icon='FollowTheSigns' iconColor='success'>
									<CardTitle>Choose your preference</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									3 different options are offered according to the needs of your
									project.
								</p>
								<FormGroup>
									{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
									<Label>Choose</Label>
									<ChecksGroup>
										{Object.keys(STARTER_PACKAGES).map((item) => (
											<Checks
												key={item}
												type='radio'
												name='chooseStarter'
												id={STARTER_PACKAGES[item]}
												label={STARTER_PACKAGES[item]}
												value={STARTER_PACKAGES[item]}
												onChange={(
													event: React.ChangeEvent<HTMLInputElement>,
												): void => {
													localStorage.setItem(
														'facit_docChooseStarter',
														event.target.value,
													);
													setStarterValue(
														event.target.value as TStarterItems,
													);
												}}
												checked={starterValue}
											/>
										))}
									</ChecksGroup>
								</FormGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-9'>
						<Card>
							<CardHeader>
								<CardLabel icon='AccountTree' iconColor='success'>
									<CardTitle>{starterValue} Folder Structure</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Visible is={starterValue === STARTER_PACKAGES.cra}>
									<CardCodeView language='yaml'>{TREE.cra}</CardCodeView>
								</Visible>
								<Visible is={starterValue === STARTER_PACKAGES.vite}>
									<CardCodeView language='yaml'>{TREE.vite}</CardCodeView>
								</Visible>
								<Visible is={starterValue === STARTER_PACKAGES.nextjs}>
									<CardCodeView language='yaml'>{TREE.nextjs}</CardCodeView>
								</Visible>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardBody>
								<div className='row align-items-center'>
									<div className='col'>
										<Icon
											icon='CheckCircle'
											size='lg'
											className='me-2 text-muted'
										/>
										<span>
											If you are ready, you can proceed to the next step.
										</span>
									</div>
									<div className='col-auto'>
										<Button
											tag='a'
											color='success'
											isLight
											icon='NavigateNext'
											to={`../${gettingStartedPagesMenu.gettingStarted.subMenu.bootstrapVariables.path}`}>
											Next
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default FolderStructurePage;
