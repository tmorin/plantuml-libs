# Taxi


```text
fontawesome/Solid/Taxi
```

```text
include('fontawesome/Solid/Taxi')
```



| Illustration | Taxi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Taxi.png) | ![illustration for Taxi](../../fontawesome/Solid/Taxi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TaxiXs>`
- `<$TaxiSm>`
- `<$TaxiMd>`
- `<$TaxiLg>`





## Taxi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Taxi
include('fontawesome/Solid/Taxi')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Taxi
include('fontawesome/Solid/Taxi')

' renders the element
Taxi('Taxi', 'Taxi', 'an optional tech label', 'an optional description')
@enduml
```

