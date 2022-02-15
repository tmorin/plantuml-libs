# Bookmark


```text
fontawesome-6/Solid/Bookmark
```

```text
include('fontawesome-6/Solid/Bookmark')
```



| Illustration | Bookmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bookmark.png) | ![illustration for Bookmark](../../fontawesome-6/Solid/Bookmark.Local.png) |




## Bookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bookmark
include('fontawesome-6/Solid/Bookmark')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bookmark
include('fontawesome-6/Solid/Bookmark')

' renders the element
Bookmark('Bookmark', 'Bookmark', 'an optional tech label')
@enduml
```

