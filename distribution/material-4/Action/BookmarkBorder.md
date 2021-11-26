# BookmarkBorder


```text
material-4/Action/BookmarkBorder
```

```text
include('material-4/Action/BookmarkBorder')
```



| Illustration | BookmarkBorder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/BookmarkBorder.png) | ![illustration for BookmarkBorder](../../material-4/Action/BookmarkBorder.Local.png) |




## BookmarkBorder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BookmarkBorder
include('material-4/Action/BookmarkBorder')

' renders the element
BookmarkBorder('BookmarkBorder', 'Bookmark Border', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element BookmarkBorder
include('material-4/Action/BookmarkBorder')

' renders the element
BookmarkBorder('BookmarkBorder', 'Bookmark Border', 'an optional tech label')
@enduml
```

