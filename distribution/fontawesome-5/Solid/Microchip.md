# Microchip


```text
fontawesome-5/Solid/Microchip
```

```text
include('fontawesome-5/Solid/Microchip')
```



| Illustration | Microchip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Microchip.png) | ![illustration for Microchip](../../fontawesome-5/Solid/Microchip.Local.png) |




## Microchip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Microchip
include('fontawesome-5/Solid/Microchip')

' renders the element
Microchip('Microchip', 'Microchip', 'an optional tech label')
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

' loads the Item which embeds the element Microchip
include('fontawesome-5/Solid/Microchip')

' renders the element
Microchip('Microchip', 'Microchip', 'an optional tech label')
@enduml
```

