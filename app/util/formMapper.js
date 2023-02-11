const test = [
  {
    Name: "Test 01",
    Description: "This is my form. Please fill it out. It's awesome!",
    RedirectMessage: "Great! Thanks for filling out my form!",
    Url: "test-01",
    Email: "",
    IsPublic: "1",
    Language: "english",
    StartDate: "2000-01-01 12:00:00",
    EndDate: "2030-01-01 12:00:00",
    EntryLimit: "0",
    DateCreated: "2023-01-15 14:37:53",
    DateUpdated: "2023-01-21 10:25:04",
    Hash: "z2w7y1v0tpzni8",
    LinkFields:
      "https://bhyctest.wufoo.com/api/v3/forms/z2w7y1v0tpzni8/fields.json",
    LinkEntries:
      "https://bhyctest.wufoo.com/api/v3/forms/z2w7y1v0tpzni8/entries.json",
    LinkEntriesCount:
      "https://bhyctest.wufoo.com/api/v3/forms/z2w7y1v0tpzni8/entries/count.json",
    Array: null,
  },
  {
    Name: "Test 02",
    Description: "This is my form. Please fill it out. It's awesome!",
    RedirectMessage: "Great! Thanks for filling out my form!",
    Url: "test-02",
    Email: "",
    IsPublic: "1",
    Language: "english",
    StartDate: "2000-01-01 12:00:00",
    EndDate: "2030-01-01 12:00:00",
    EntryLimit: "0",
    DateCreated: "2023-01-26 16:05:26",
    DateUpdated: "2023-01-26 16:07:22",
    Hash: "mb64ikc110s0vw",
    LinkFields:
      "https://bhyctest.wufoo.com/api/v3/forms/mb64ikc110s0vw/fields.json",
    LinkEntries:
      "https://bhyctest.wufoo.com/api/v3/forms/mb64ikc110s0vw/entries.json",
    LinkEntriesCount:
      "https://bhyctest.wufoo.com/api/v3/forms/mb64ikc110s0vw/entries/count.json",
    Array: null,
  },
];

const mforms = {
  name: "Name",
  description: "Description",
  isPublic: "IsPublic",
  hash: "Hash",
};

const mapForms = (list) => {
  const newList = [];
  list.forEach((item) => {
    {
      newList.push({
        name: item[mforms.name],
        description: item[mforms.description],
        isPublic: item[mforms.isPublic],
        hash: item[mforms.hash],
      });
    }
  });
  return newList;
};

export default {
  mapForms,
};
