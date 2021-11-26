# HSquare


```text
fontawesome-5/Solid/HSquare
```

```text
include('fontawesome-5/Solid/HSquare')
```



| Illustration | HSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HSquare.png) | ![illustration for HSquare](../../fontawesome-5/Solid/HSquare.Local.png) |




## HSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HSquare
include('fontawesome-5/Solid/HSquare')

' renders the element
HSquare('HSquare', 'H Square', 'an optional tech label')
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

' loads the Item which embeds the element HSquare
include('fontawesome-5/Solid/HSquare')

' renders the element
HSquare('HSquare', 'H Square', 'an optional tech label')
@enduml
```

