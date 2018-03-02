import React, { Component } from "react";
import { FacebookShareButton, GooglePlusShareButton, TwitterShareButton } from "react-share";
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google-plus-square';

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
						<a className="icon-twitter"><FaTwitter/></a>
					</TwitterShareButton>
					<FacebookShareButton url={url} quote={post.title}>
						<a className="icon-facebook"><FaFacebook/></a>
					</FacebookShareButton>
					<GooglePlusShareButton url={url}>
						<a className="icon-google"><FaGoogle/></a>
					</GooglePlusShareButton>
				</div>
			</section>
		);
	}
}

export default PostShare;