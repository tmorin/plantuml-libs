# ChevronRight


```text
material-4/Navigation/ChevronRight
```

```text
include('material-4/Navigation/ChevronRight')
```



| Illustration | ChevronRight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ChevronRight.png) | ![illustration for ChevronRight](../../material-4/Navigation/ChevronRight.Local.png) |




## ChevronRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ChevronRight
include('material-4/Navigation/ChevronRight')

' renders the element
ChevronRight('ChevronRight', 'Chevron Right', 'an optional tech label')
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

' loads the Item which embeds the element ChevronRight
include('material-4/Navigation/ChevronRight')

' renders the element
ChevronRight('ChevronRight', 'Chevron Right', 'an optional tech label')
@enduml
```

