# RedRiver


```text
fontawesome/Brands/RedRiver
```

```text
include('fontawesome/Brands/RedRiver')
```



| Illustration | RedRiver |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/RedRiver.png) | ![illustration for RedRiver](../../fontawesome/Brands/RedRiver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedRiverXs>`
- `<$RedRiverSm>`
- `<$RedRiverMd>`
- `<$RedRiverLg>`





## RedRiver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RedRiver
include('fontawesome/Brands/RedRiver')

' renders the element
RedRiver('RedRiver', 'Red River', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RedRiver
include('fontawesome/Brands/RedRiver')

' renders the element
RedRiver('RedRiver', 'Red River', 'an optional tech label', 'an optional description')
@enduml
```

