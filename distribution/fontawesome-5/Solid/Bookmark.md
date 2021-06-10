# Bookmark


```text
fontawesome-5/Solid/Bookmark
```

```text
include('fontawesome-5/Solid/Bookmark')
```



| Illustration | Bookmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bookmark.png) | ![illustration for Bookmark](../../fontawesome-5/Solid/Bookmark.Local.png) |




## Bookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bookmark
include('fontawesome-5/Solid/Bookmark')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bookmark
include('fontawesome-5/Solid/Bookmark')

' renders the element
Bookmark('Bookmark', 'Bookmark', 'an optional tech label')
@enduml
```

