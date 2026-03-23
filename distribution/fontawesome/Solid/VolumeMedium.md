# VolumeMedium


```text
fontawesome/Solid/VolumeMedium
```

```text
include('fontawesome/Solid/VolumeMedium')
```



| Illustration | VolumeMedium |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeMedium.png) | ![illustration for VolumeMedium](../../fontawesome/Solid/VolumeMedium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeMediumXs>`
- `<$VolumeMediumSm>`
- `<$VolumeMediumMd>`
- `<$VolumeMediumLg>`





## VolumeMedium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeMedium
include('fontawesome/Solid/VolumeMedium')

' renders the element
VolumeMedium('VolumeMedium', 'Volume Medium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeMedium
include('fontawesome/Solid/VolumeMedium')

' renders the element
VolumeMedium('VolumeMedium', 'Volume Medium', 'an optional tech label', 'an optional description')
@enduml
```

