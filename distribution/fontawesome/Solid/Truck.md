# Truck


```text
fontawesome/Solid/Truck
```

```text
include('fontawesome/Solid/Truck')
```



| Illustration | Truck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Truck.png) | ![illustration for Truck](../../fontawesome/Solid/Truck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckXs>`
- `<$TruckSm>`
- `<$TruckMd>`
- `<$TruckLg>`





## Truck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Truck
include('fontawesome/Solid/Truck')

' renders the element
Truck('Truck', 'Truck', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Truck
include('fontawesome/Solid/Truck')

' renders the element
Truck('Truck', 'Truck', 'an optional tech label', 'an optional description')
@enduml
```

