export const Breadcrumb = (props) => {
    return(
        <>
        <ol class="breadcrumb page-breadcrumb mt-3">
            <li class="breadcrumb-item" aria-current="page">
                <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{props.page}</li>
        </ol>
        </>
    )

}