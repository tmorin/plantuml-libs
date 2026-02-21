# Microchip


```text
fontawesome/Solid/Microchip
```

```text
include('fontawesome/Solid/Microchip')
```



| Illustration | Microchip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Microchip.png) | ![illustration for Microchip](../../fontawesome/Solid/Microchip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrochipXs>`
- `<$MicrochipSm>`
- `<$MicrochipMd>`
- `<$MicrochipLg>`





## Microchip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Microchip
include('fontawesome/Solid/Microchip')

' renders the element
Microchip('Microchip', 'Microchip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microchip
include('fontawesome/Solid/Microchip')

' renders the element
Microchip('Microchip', 'Microchip', 'an optional tech label', 'an optional description')
@enduml
```

