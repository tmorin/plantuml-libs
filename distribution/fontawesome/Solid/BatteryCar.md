# BatteryCar


```text
fontawesome/Solid/BatteryCar
```

```text
include('fontawesome/Solid/BatteryCar')
```



| Illustration | BatteryCar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BatteryCar.png) | ![illustration for BatteryCar](../../fontawesome/Solid/BatteryCar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryCarXs>`
- `<$BatteryCarSm>`
- `<$BatteryCarMd>`
- `<$BatteryCarLg>`





## BatteryCar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BatteryCar
include('fontawesome/Solid/BatteryCar')

' renders the element
BatteryCar('BatteryCar', 'Battery Car', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BatteryCar
include('fontawesome/Solid/BatteryCar')

' renders the element
BatteryCar('BatteryCar', 'Battery Car', 'an optional tech label', 'an optional description')
@enduml
```

