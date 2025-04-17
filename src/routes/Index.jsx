//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage
import Home from "../views/Home.jsx";

//import view posts index
import PostIndex from "../views/Index.jsx";

//import view post create
import PostCreate from "../views/Create.jsx";

//import view post edit
import PostEdit from "../views/Edit.jsx";

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/posts" */}
            <Route path="/posts" element={<PostIndex />} />

            {/* route "/posts/create" */}
            <Route path="/posts/create" element={<PostCreate />} />

            {/* route "/posts/edit/:id" */}
            <Route path="/posts/edit/:id" element={<PostEdit />} />

        </Routes>
    )
}

export default RoutesIndex