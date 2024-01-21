import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No-discount" },
          { value: "with-discount", label: "With-discount" },
        ]}
      ></Filter>
      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (a-z)" },
          { value: "name-desc", label: "sort by name (z-a)" },
          { value: "regularPrice-asc", label: "sort by price (low first)" },
          { value: "regularPrice-desc", label: "sort by price (high first)" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "sort by capacity (high first)" },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
