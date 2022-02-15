# ShareFromSquare


```text
fontawesome-6/Regular/ShareFromSquare
```

```text
include('fontawesome-6/Regular/ShareFromSquare')
```



| Illustration | ShareFromSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/ShareFromSquare.png) | ![illustration for ShareFromSquare](../../fontawesome-6/Regular/ShareFromSquare.Local.png) |




## ShareFromSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShareFromSquare
include('fontawesome-6/Regular/ShareFromSquare')

' renders the element
ShareFromSquare('ShareFromSquare', 'Share From Square', 'an optional tech label')
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

' loads the Item which embeds the element ShareFromSquare
include('fontawesome-6/Regular/ShareFromSquare')

' renders the element
ShareFromSquare('ShareFromSquare', 'Share From Square', 'an optional tech label')
@enduml
```

