const contentSections = [
  {
    id: "home",
    title: "首页",
    tags: ["ayx", "首页", "推荐"],
    items: ["欢迎来到ayx-chn.com", "最新内容一览"]
  },
  {
    id: "blog",
    title: "博客",
    tags: ["ayx", "技术", "分享"],
    items: ["如何搭建个人博客", "前端性能优化笔记"]
  },
  {
    id: "projects",
    title: "项目",
    tags: ["ayx", "开源", "演示"],
    items: ["内容地图生成器", "简易搜索组件"]
  }
];

const siteUrl = "https://ayx-chn.com";

function searchContent(query, sections) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  for (const section of sections) {
    const matchedItems = section.items.filter(item =>
      item.toLowerCase().includes(lowerQuery)
    );
    const matchedTags = section.tags.some(tag =>
      tag.toLowerCase().includes(lowerQuery)
    );
    if (matchedItems.length > 0 || matchedTags) {
      results.push({
        sectionId: section.id,
        sectionTitle: section.title,
        matchedItems: matchedItems,
        matchedTags: matchedTags
      });
    }
  }
  return results;
}

function getTagsBySection(sectionId, sections) {
  const section = sections.find(s => s.id === sectionId);
  return section ? section.tags : [];
}

function listAllTags(sections) {
  const tagSet = new Set();
  for (const section of sections) {
    for (const tag of section.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet);
}

function filterByTag(tag, sections) {
  return sections.filter(section =>
    section.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

function generateSectionMap(sections) {
  const map = {};
  for (const section of sections) {
    map[section.id] = {
      title: section.title,
      tags: section.tags,
      itemCount: section.items.length
    };
  }
  return map;
}

const exampleQuery = "ayx";
const exampleResults = searchContent(exampleQuery, contentSections);

console.log("站点URL:", siteUrl);
console.log("搜索示例:", exampleQuery, exampleResults);
console.log("所有标签:", listAllTags(contentSections));
console.log("按标签筛选 'ayx':", filterByTag("ayx", contentSections));
console.log("内容地图:", generateSectionMap(contentSections));