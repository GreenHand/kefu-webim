var Dict = require("./Dict");

module.exports = {
	channelId: null,
	imToken: null,
	imRestDown: false,
	ctaEnable: false,
	systemAgentAvatar: null,
	isChatWindowOpen: null,
	isAgentNicknameEnable: null,
	isConfigFromBackend: false,
	currentBrowsingURL: null,
	isInOfficeHours: false,
	hasHumanAgentOnline: false,
	hasRobotAgentOnline: false,
	officialAccountList: [],
	tenantAvatar: null,
	defaultAvatar: null,
	currentOfficialAccount: {},
	systemOfficialAccount: {},
	deepStreamChannelEnable: false,
	visitorInfo: {},
	imgFileList: new Dict(),
	options: {
		imRestServer: "",
		imXmppServer: "",
	},
};
