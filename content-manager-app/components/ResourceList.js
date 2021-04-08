import Link from 'next/link'

const ResourceList = ({ resources }) => {

	const renderResoureces = () => {
		return resources.map(resource => 
			<div key={resource.id} className="column is-5 is-offset-1 ">
				<div className="content is-medium">
					<h2 className="subtitle is-5 has-text-grey">{resource.createdAt}</h2>
					<h1 className="title has-text-black is-3">{resource.title}</h1>
					<p className="has-text-dark">{resource.description}</p>
					<Link href={`/resources/${resource.id}`}>
						<a>Learn more</a>
					</Link>
				</div>
			</div>	
		)
	}


	return (
		<section className="hero ">
			<div className="hero-body">
				<div className="container">

					<section className="section">
						<div className="columns is-multiline is-variable is-8">
							
							{ renderResoureces() }							

						</div>
					</section>
					<div className="is-divider"></div>

				</div>
			</div>
		</section>
	)
}

export default ResourceList;