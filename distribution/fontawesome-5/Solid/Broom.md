# Broom


```text
fontawesome-5/Solid/Broom
```

```text
include('fontawesome-5/Solid/Broom')
```



| Illustration | Broom |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Broom.png) | ![illustration for Broom](../../fontawesome-5/Solid/Broom.Local.png) |




## Broom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Broom
include('fontawesome-5/Solid/Broom')

' renders the element
Broom('Broom', 'Broom', 'an optional tech label')
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

' loads the Item which embeds the element Broom
include('fontawesome-5/Solid/Broom')

' renders the element
Broom('Broom', 'Broom', 'an optional tech label')
@enduml
```

