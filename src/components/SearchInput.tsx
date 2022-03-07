import axios from "axios";
import { useState, useEffect } from "react";


export default function SearchInput() {
    const [data, setData] = useState<any[]>([])
    const [searchFilter, setSearchFilter] = useState<any[]>([])
    const [result, setResult] = useState("");

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjUwNGRjYmU1LTczYWUtNDk2Ni05YjJhLWViYTI2YjdjMWIwYSIsImlhdCI6MTY0NjU4NDYyMiwic3ViIjoiZGV2ZWxvcGVyL2M5Y2EzNzY5LTg0Y2MtOTVkZS1iMTdlLTFkZWFkNjE4Nzg5MiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS42MS4yMDUuMTc5Il0sInR5cGUiOiJjbGllbnQifV19.EB8f3PiXeQV0Xqgp6o9u6idzE6j8iVQU5Cbqylc-VCRDKuqt5zw-lNaMrKfGH8Xi8nQhT5o16rXWsMG8Hzgp2w";

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('https://run.mocky.io/v3/ae0ce434-5444-4aa1-a672-52081b792439');
                console.log(resp.data.items);
                setData(resp.data.items);
                setSearchFilter(resp.data.items);
            }
            catch (err) {
                // throw new Error(err);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {

    },[])
    
    const onChange = (e: any) => {
        setResult(e.target.value);
    }

    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" onChange={onChange} className="form-control" placeholder="Buscar aqui ... " aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-warning" type="button" id="button-addon2">Filtrar</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">País</th>
                                <th scope="col">Liga de guerra</th>
                                <th scope="col">Miembros del clan</th>
                                <th scope="col">Insignia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                            data.filter((clan) =>{
                                if (result === ""){
                                    return clan
                                }else if(clan.name.toLowerCase().includes(result.toLowerCase()) || clan.location.name.toLowerCase().includes(result.toLowerCase()) ||clan.warLeague.name.toLowerCase().includes(result.toLowerCase()) ){
                                    return clan
                                }
                            }).map((r, i) => (
                                <tr key={i} >
                                    <td>{r.name}</td>
                                    <td>{r.location.name}</td>
                                    <td>{r.warLeague.name}</td>
                                    <td>{r.members}</td>
                                    <td><img src={r.badgeUrls.small} alt="" width="30px" /></td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}