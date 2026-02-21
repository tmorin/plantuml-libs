# Bookmark


```text
fontawesome/Regular/Bookmark
```

```text
include('fontawesome/Regular/Bookmark')
```



| Illustration | Bookmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Bookmark.png) | ![illustration for Bookmark](../../fontawesome/Regular/Bookmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookmarkXs>`
- `<$BookmarkSm>`
- `<$BookmarkMd>`
- `<$BookmarkLg>`





## Bookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bookmark
include('fontawesome/Regular/Bookmark')

' renders the element
Bookmark('Bookmark', 'Bookmark', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bookmark
include('fontawesome/Regular/Bookmark')

' renders the element
Bookmark('Bookmark', 'Bookmark', 'an optional tech label', 'an optional description')
@enduml
```

