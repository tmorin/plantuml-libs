# Taxi


```text
fontawesome-6/Solid/Taxi
```

```text
include('fontawesome-6/Solid/Taxi')
```



| Illustration | Taxi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Taxi.png) | ![illustration for Taxi](../../fontawesome-6/Solid/Taxi.Local.png) |




## Taxi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Taxi
include('fontawesome-6/Solid/Taxi')

' renders the element
Taxi('Taxi', 'Taxi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Taxi
include('fontawesome-6/Solid/Taxi')

' renders the element
Taxi('Taxi', 'Taxi', 'an optional tech label', 'an optional description')
@enduml
```

