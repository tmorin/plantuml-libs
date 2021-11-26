# ArrowRight


```text
fontawesome-5/Solid/ArrowRight
```

```text
include('fontawesome-5/Solid/ArrowRight')
```



| Illustration | ArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowRight.png) | ![illustration for ArrowRight](../../fontawesome-5/Solid/ArrowRight.Local.png) |




## ArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowRight
include('fontawesome-5/Solid/ArrowRight')

' renders the element
ArrowRight('ArrowRight', 'Arrow Right', 'an optional tech label')
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

' loads the Item which embeds the element ArrowRight
include('fontawesome-5/Solid/ArrowRight')

' renders the element
ArrowRight('ArrowRight', 'Arrow Right', 'an optional tech label')
@enduml
```

