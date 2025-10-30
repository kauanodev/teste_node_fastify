export async function authMiddleware(req, res){
    const apiEmail = await req.headers['email'];
    if (!apiEmail){
        return res.status(401).send({message: "Unauthorized: Email header missing"});
    }
}