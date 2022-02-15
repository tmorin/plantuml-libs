# ArrowDownZA


```text
fontawesome-6/Solid/ArrowDownZA
```

```text
include('fontawesome-6/Solid/ArrowDownZA')
```



| Illustration | ArrowDownZA |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowDownZA.png) | ![illustration for ArrowDownZA](../../fontawesome-6/Solid/ArrowDownZA.Local.png) |




## ArrowDownZA

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowDownZA
include('fontawesome-6/Solid/ArrowDownZA')

' renders the element
ArrowDownZA('ArrowDownZa', 'Arrow Down Za', 'an optional tech label')
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

' loads the Item which embeds the element ArrowDownZA
include('fontawesome-6/Solid/ArrowDownZA')

' renders the element
ArrowDownZA('ArrowDownZa', 'Arrow Down Za', 'an optional tech label')
@enduml
```

