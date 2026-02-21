# Gear


```text
fontawesome/Solid/Gear
```

```text
include('fontawesome/Solid/Gear')
```



| Illustration | Gear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gear.png) | ![illustration for Gear](../../fontawesome/Solid/Gear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GearXs>`
- `<$GearSm>`
- `<$GearMd>`
- `<$GearLg>`





## Gear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gear
include('fontawesome/Solid/Gear')

' renders the element
Gear('Gear', 'Gear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gear
include('fontawesome/Solid/Gear')

' renders the element
Gear('Gear', 'Gear', 'an optional tech label', 'an optional description')
@enduml
```

