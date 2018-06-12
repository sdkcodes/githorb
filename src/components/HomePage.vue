<template>
	<section>
		<div class="container-fluid">
			<div class="container">
				<label>Enter a github username to view thier profile</label>
				<div class="input-group">
					<input type="text" name="" v-model="username" class="form-control">
					<span class="input-group-addon btn btn-primary" @click="getUser()">View</span>
				</div>
				<br>
			</div>
			<div class="row">
				<div class="col-sm-3">
					<img class="img-responsive img-rounded" v-bind:src='result.avatar_url' width="230" height="230">
					<div align="left">
						<br>
						<span class="h3">{{ result.name }}</span>
						<br>
						<span class="h4">{{ result.login }}</span>
						<br><br>
						<span>{{ result.bio }}</span>
						<p>
							{{ result.company }}
						</p>
					</div>
					<div>
						<a class="btn btn-block btn-default">Edit bio</a>
					</div>
				</div>
				<div class="col-sm-9">
					<ul class="nav nav-tabs">
					  <li role="presentation" v-bind:class="{ active: repos_tab }" @click="getRepositories()"><a href="#">Repositories</a></li>
					  <li role="presentation"><a href="#" @click="getStars()">Stars</a></li>
					  <li role="presentation" v-bind:class="{ active: followers_tab }"><a href="#" @click="getFollowers">Followers</a></li>
					  <li role="presentation" v-bind:class="{ active: following_tab }"><a href="#">Following</a></li>
					</ul>
					<div class="repositories">
						<div v-if="repos">
							<ul v-for="r in repos" class="list-group">
								<li class="list-group-item">
									{{ r.name }}
								</li>
							</ul>
						</div>
					</div>
					<div class="stars"></div>
					<div class="followers"></div>
					<div class="following"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		name: 'HomePage',
		data(){
			return {
				result:'',
				username: 'sdkcodes',
				repos: '',
				starred: '',
				following: '',
				followers: '',
				following_tab: false,
				followers_tab: false,
				repos_tab: false
			}
		},
		methods: {
			getUser(){
				let self = this;
				fetch(`https://api.github.com/users/${this.username}`)
				.then((j) => {
					console.log(j.status);
					if (j.status == 200){
						j.json().then(function(r){
							self.result = r;
							self.getRepositories();
						});
					}
					else if(j.status == 404){
						alert("Invalid user");	
					}
					else{
						alert("There was a problem fetching user from Github");
					}
					// return j.json();
				  // return j;
				});
			},
			getRepositories(){
				if (this.result){
					let self = this;
					fetch(this.result.repos_url)
					.then((i) => {
						if (i.status == 200){
							i.json().then(function(r){
								self.repos = r;
							});
						}
					})
				}
			},
			getFollowing(){
				this.repos_tab = false;
				this.following_tab = true;
				this.followers_tab = false;
			},
			getFollowers(){
				
				this.repos_tab = false;
				this.following_tab = false;
				this.followers_tab = true;

			}


		},
		mounted: function(){
			this.getUser();
		}
	}
</script>