# DoorOpen


```text
fontawesome/Solid/DoorOpen
```

```text
include('fontawesome/Solid/DoorOpen')
```



| Illustration | DoorOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DoorOpen.png) | ![illustration for DoorOpen](../../fontawesome/Solid/DoorOpen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoorOpenXs>`
- `<$DoorOpenSm>`
- `<$DoorOpenMd>`
- `<$DoorOpenLg>`





## DoorOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DoorOpen
include('fontawesome/Solid/DoorOpen')

' renders the element
DoorOpen('DoorOpen', 'Door Open', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoorOpen
include('fontawesome/Solid/DoorOpen')

' renders the element
DoorOpen('DoorOpen', 'Door Open', 'an optional tech label', 'an optional description')
@enduml
```

