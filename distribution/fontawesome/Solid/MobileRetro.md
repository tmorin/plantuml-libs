# MobileRetro


```text
fontawesome/Solid/MobileRetro
```

```text
include('fontawesome/Solid/MobileRetro')
```



| Illustration | MobileRetro |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobileRetro.png) | ![illustration for MobileRetro](../../fontawesome/Solid/MobileRetro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileRetroXs>`
- `<$MobileRetroSm>`
- `<$MobileRetroMd>`
- `<$MobileRetroLg>`





## MobileRetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileRetro
include('fontawesome/Solid/MobileRetro')

' renders the element
MobileRetro('MobileRetro', 'Mobile Retro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileRetro
include('fontawesome/Solid/MobileRetro')

' renders the element
MobileRetro('MobileRetro', 'Mobile Retro', 'an optional tech label', 'an optional description')
@enduml
```

