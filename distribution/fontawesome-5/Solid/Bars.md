# Bars


```text
fontawesome-5/Solid/Bars
```

```text
include('fontawesome-5/Solid/Bars')
```



| Illustration | Bars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bars.png) | ![illustration for Bars](../../fontawesome-5/Solid/Bars.Local.png) |




## Bars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bars
include('fontawesome-5/Solid/Bars')

' renders the element
Bars('Bars', 'Bars', 'an optional tech label')
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

' loads the Item which embeds the element Bars
include('fontawesome-5/Solid/Bars')

' renders the element
Bars('Bars', 'Bars', 'an optional tech label')
@enduml
```

