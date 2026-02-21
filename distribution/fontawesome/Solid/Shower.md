# Shower


```text
fontawesome/Solid/Shower
```

```text
include('fontawesome/Solid/Shower')
```



| Illustration | Shower |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Shower.png) | ![illustration for Shower](../../fontawesome/Solid/Shower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShowerXs>`
- `<$ShowerSm>`
- `<$ShowerMd>`
- `<$ShowerLg>`





## Shower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Shower
include('fontawesome/Solid/Shower')

' renders the element
Shower('Shower', 'Shower', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shower
include('fontawesome/Solid/Shower')

' renders the element
Shower('Shower', 'Shower', 'an optional tech label', 'an optional description')
@enduml
```

