const AddMessage = () => {
	return (
		<div className='col-sm-6 main d-flex p-5'>
			<form action='' className='form w-100'>
				<div className='form-group'>
					<label htmlFor='author'>Auteur</label>
					<input type='text' className='form-control' name='' />
				</div>
				<div className='form-group'>
					<label htmlFor='author'>Message</label>
					<textarea className='form-control' name=''></textarea>
				</div>
				<div className='form-group d-flex justify-content-end'>
					<button className='btn btn-danger'>Envoyer</button>
				</div>
			</form>
		</div>
	);
};

export default AddMessage;
