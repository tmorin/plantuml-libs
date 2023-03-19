# BookBookmark


```text
fontawesome-6/Solid/BookBookmark
```

```text
include('fontawesome-6/Solid/BookBookmark')
```



| Illustration | BookBookmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BookBookmark.png) | ![illustration for BookBookmark](../../fontawesome-6/Solid/BookBookmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookBookmarkXs>`
- `<$BookBookmarkSm>`
- `<$BookBookmarkMd>`
- `<$BookBookmarkLg>`





## BookBookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookBookmark
include('fontawesome-6/Solid/BookBookmark')

' renders the element
BookBookmark('BookBookmark', 'Book Bookmark', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookBookmark
include('fontawesome-6/Solid/BookBookmark')

' renders the element
BookBookmark('BookBookmark', 'Book Bookmark', 'an optional tech label', 'an optional description')
@enduml
```

