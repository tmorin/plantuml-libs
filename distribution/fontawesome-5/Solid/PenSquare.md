# PenSquare


```text
fontawesome-5/Solid/PenSquare
```

```text
include('fontawesome-5/Solid/PenSquare')
```



| Illustration | PenSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PenSquare.png) | ![illustration for PenSquare](../../fontawesome-5/Solid/PenSquare.Local.png) |




## PenSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PenSquare
include('fontawesome-5/Solid/PenSquare')

' renders the element
PenSquare('PenSquare', 'Pen Square', 'an optional tech label')
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

' loads the Item which embeds the element PenSquare
include('fontawesome-5/Solid/PenSquare')

' renders the element
PenSquare('PenSquare', 'Pen Square', 'an optional tech label')
@enduml
```

