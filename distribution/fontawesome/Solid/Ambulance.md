# Ambulance


```text
fontawesome/Solid/Ambulance
```

```text
include('fontawesome/Solid/Ambulance')
```



| Illustration | Ambulance |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ambulance.png) | ![illustration for Ambulance](../../fontawesome/Solid/Ambulance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmbulanceXs>`
- `<$AmbulanceSm>`
- `<$AmbulanceMd>`
- `<$AmbulanceLg>`





## Ambulance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ambulance
include('fontawesome/Solid/Ambulance')

' renders the element
Ambulance('Ambulance', 'Ambulance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ambulance
include('fontawesome/Solid/Ambulance')

' renders the element
Ambulance('Ambulance', 'Ambulance', 'an optional tech label', 'an optional description')
@enduml
```

