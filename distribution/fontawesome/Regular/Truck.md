# Truck


```text
fontawesome/Regular/Truck
```

```text
include('fontawesome/Regular/Truck')
```



| Illustration | Truck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Truck.png) | ![illustration for Truck](../../fontawesome/Regular/Truck.Local.png) |



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
include('fontawesome/Regular/Truck')

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
include('fontawesome/Regular/Truck')

' renders the element
Truck('Truck', 'Truck', 'an optional tech label', 'an optional description')
@enduml
```

