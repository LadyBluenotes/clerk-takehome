export const DashboardButton = () => (
	<button
		className="ui-button"
		onClick={() => {
			window.location.href = "/dashboard";
		}}
	>
		Dashboard
	</button>
);
