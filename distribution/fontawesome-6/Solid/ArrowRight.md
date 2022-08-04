# ArrowRight


```text
fontawesome-6/Solid/ArrowRight
```

```text
include('fontawesome-6/Solid/ArrowRight')
```



| Illustration | ArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowRight.png) | ![illustration for ArrowRight](../../fontawesome-6/Solid/ArrowRight.Local.png) |




## ArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowRight
include('fontawesome-6/Solid/ArrowRight')

' renders the element
ArrowRight('ArrowRight', 'Arrow Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowRight
include('fontawesome-6/Solid/ArrowRight')

' renders the element
ArrowRight('ArrowRight', 'Arrow Right', 'an optional tech label', 'an optional description')
@enduml
```

