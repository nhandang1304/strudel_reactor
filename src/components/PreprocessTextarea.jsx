function PreprocessTextarea({ value, onChange }) {
	return (
		<>
			<label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
			<textarea className="preprocess" rows="15" id="proc" value={value}
				onChange={e => onChange(e.target.value)} ></textarea>
		</>
		
	)
}

export default PreprocessTextarea;