const Card = () => {
  return (
    <>
      <div>
        <div class="card" style={{ width: "18rem" }}>
          <img src="https://images.unsplash.com/photo-1611497406092-4bc22c54b322?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVuZHQlMjBjYWtlfGVufDB8fDB8fHww" class="card-img-top" alt="bun" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some important</p>
            <div className="container w-100">
              <select
                className="m-2 h-100 "
                style={{ background: "rgb(207, 91, 182)", borderRadius: "5px" }}
              >
                {Array.from(Array(7), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100 "
                style={{ background: "rgb(207, 91, 182)", borderRadius: "5px" }}
              >
                <option value="half">Half</option>
                <option value="half">Half</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
