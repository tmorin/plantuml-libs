# ShareSquare


```text
fontawesome-5/Regular/ShareSquare
```

```text
include('fontawesome-5/Regular/ShareSquare')
```



| Illustration | ShareSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/ShareSquare.png) | ![illustration for ShareSquare](../../fontawesome-5/Regular/ShareSquare.Local.png) |




## ShareSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShareSquare
include('fontawesome-5/Regular/ShareSquare')

' renders the element
ShareSquare('ShareSquare', 'Share Square', 'an optional tech label')
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

' loads the Item which embeds the element ShareSquare
include('fontawesome-5/Regular/ShareSquare')

' renders the element
ShareSquare('ShareSquare', 'Share Square', 'an optional tech label')
@enduml
```

