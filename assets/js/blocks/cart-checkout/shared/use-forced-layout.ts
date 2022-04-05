/**
 * useForcedLayout hook
 *
 * Responsible for ensuring FORCED blocks exist in the inner block layout. Forced blocks cannot be removed.
 */
const useForcedLayoutWindow = window.useForcedLayout;
export const useForcedLayout = ( {
	clientId,
	registeredBlocks,
	defaultTemplate = [],
}: {
	// Client ID of the parent block.
	clientId: string;
	// An array of registered blocks that may be forced in this particular layout.
	registeredBlocks: Array< string >;
	// The default template for the inner blocks in this layout.
	defaultTemplate: TemplateArray;
} ): void => {
	return useForcedLayoutWindow(
		clientId,
		( registeredBlocks = [] ),
		defaultTemplate
	);
};
