# Bookmark


```text
material-4/Action/Bookmark
```

```text
include('material-4/Action/Bookmark')
```



| Illustration | Bookmark |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Bookmark.png) | ![illustration for Bookmark](../../material-4/Action/Bookmark.Local.png) |




## Bookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Bookmark
include('material-4/Action/Bookmark')

' renders the element
Bookmark('Bookmark', 'Bookmark', 'an optional tech label')
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

' loads the Item which embeds the element Bookmark
include('material-4/Action/Bookmark')

' renders the element
Bookmark('Bookmark', 'Bookmark', 'an optional tech label')
@enduml
```

