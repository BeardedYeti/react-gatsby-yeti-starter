import React, { Component } from "react";
import { FacebookShareButton, GooglePlusShareButton, TwitterShareButton } from "react-share";
import { Icon } from 'react-fa';

class PostShare extends Component {
	render() {
		const { postNode, siteMetadata } = this.props;
		const post = postNode.frontmatter;
		//const postUrl = postNode.fields.slug.substr(1);
		//console.log(postUrl);
		const url = siteMetadata.siteUrl + postNode.fields.slug;


		return (
			<section className="share">
				<h4>Share this post</h4>
				<div style={{ display: "flex" }}>
					<TwitterShareButton url={url} title={post.title}>
						<a className="icon-twitter"><Icon name="twitter-square"/></a>
					</TwitterShareButton>
					<FacebookShareButton url={url} quote={post.title}>
						<a className="icon-facebook"><Icon name="facebook"/></a>
					</FacebookShareButton>
					<GooglePlusShareButton url={url}>
						<a className="icon-google"><Icon name="google-plus-square"/></a>
					</GooglePlusShareButton>
				</div>
			</section>
		);
	}
}

export default PostShare;