import React from 'react'
import Image from 'next/image'

const Kids = () => {
    return (
        <>
            <div class="card" style="width: 18rem;">
                <Image src="/img/kids.jpg" className="d-block w-100" alt="..." width={600} height={500} />
                <div class="card-body">
                    <h5 class="card-title">Card with stretched link</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
            </div>
        </>

    )
}

export default Kids



