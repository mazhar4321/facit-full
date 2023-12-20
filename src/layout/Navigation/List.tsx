import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
	id?: string;
	children?: ReactNode;
	className?: string;
	ariaLabelledby?: string;
	parentId?: string;
	rootId?: string;
	horizontal?: boolean;
}
const List = forwardRef<HTMLUListElement, IListProps>(
	({ id, children, className, ariaLabelledby, parentId, rootId, horizontal, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				id={id}
				className={classNames('navigation', { 'navigation-menu': horizontal }, className)}
				aria-labelledby={ariaLabelledby}
				data-bs-parent={
					parentId === `${rootId}__${rootId}`
						? `#${rootId}`
						: (parentId && `#${parentId}`) || null
				}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</ul>
		);
	},
);
List.displayName = 'List';
List.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	parentId: PropTypes.string,
	rootId: PropTypes.string,
	horizontal: PropTypes.bool,
};
List.defaultProps = {
	id: undefined,
	children: null,
	className: undefined,
	ariaLabelledby: undefined,
	parentId: undefined,
	rootId: undefined,
	horizontal: false,
};

export default List;
