# PenToSquare


```text
fontawesome-6/Regular/PenToSquare
```

```text
include('fontawesome-6/Regular/PenToSquare')
```



| Illustration | PenToSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/PenToSquare.png) | ![illustration for PenToSquare](../../fontawesome-6/Regular/PenToSquare.Local.png) |




## PenToSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PenToSquare
include('fontawesome-6/Regular/PenToSquare')

' renders the element
PenToSquare('PenToSquare', 'Pen To Square', 'an optional tech label')
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

' loads the Item which embeds the element PenToSquare
include('fontawesome-6/Regular/PenToSquare')

' renders the element
PenToSquare('PenToSquare', 'Pen To Square', 'an optional tech label')
@enduml
```

