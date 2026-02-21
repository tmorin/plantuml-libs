# Bookmarks


```text
material/Action/Bookmarks
```

```text
include('material/Action/Bookmarks')
```



| Illustration | Bookmarks |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Bookmarks.png) | ![illustration for Bookmarks](../../material/Action/Bookmarks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookmarksXs>`
- `<$BookmarksSm>`
- `<$BookmarksMd>`
- `<$BookmarksLg>`





## Bookmarks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Bookmarks
include('material/Action/Bookmarks')

' renders the element
Bookmarks('Bookmarks', 'Bookmarks', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Bookmarks
include('material/Action/Bookmarks')

' renders the element
Bookmarks('Bookmarks', 'Bookmarks', 'an optional tech label', 'an optional description')
@enduml
```

