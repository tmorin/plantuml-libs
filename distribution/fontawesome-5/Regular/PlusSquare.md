# PlusSquare


```text
fontawesome-5/Regular/PlusSquare
```

```text
include('fontawesome-5/Regular/PlusSquare')
```



| Illustration | PlusSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/PlusSquare.png) | ![illustration for PlusSquare](../../fontawesome-5/Regular/PlusSquare.Local.png) |




## PlusSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlusSquare
include('fontawesome-5/Regular/PlusSquare')

' renders the element
PlusSquare('PlusSquare', 'Plus Square', 'an optional tech label')
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

' loads the Item which embeds the element PlusSquare
include('fontawesome-5/Regular/PlusSquare')

' renders the element
PlusSquare('PlusSquare', 'Plus Square', 'an optional tech label')
@enduml
```

