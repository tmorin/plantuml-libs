# Parking


```text
fontawesome/Solid/Parking
```

```text
include('fontawesome/Solid/Parking')
```



| Illustration | Parking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Parking.png) | ![illustration for Parking](../../fontawesome/Solid/Parking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParkingXs>`
- `<$ParkingSm>`
- `<$ParkingMd>`
- `<$ParkingLg>`





## Parking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Parking
include('fontawesome/Solid/Parking')

' renders the element
Parking('Parking', 'Parking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Parking
include('fontawesome/Solid/Parking')

' renders the element
Parking('Parking', 'Parking', 'an optional tech label', 'an optional description')
@enduml
```

