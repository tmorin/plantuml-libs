# PooStorm


```text
fontawesome/Solid/PooStorm
```

```text
include('fontawesome/Solid/PooStorm')
```



| Illustration | PooStorm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PooStorm.png) | ![illustration for PooStorm](../../fontawesome/Solid/PooStorm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PooStormXs>`
- `<$PooStormSm>`
- `<$PooStormMd>`
- `<$PooStormLg>`





## PooStorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PooStorm
include('fontawesome/Solid/PooStorm')

' renders the element
PooStorm('PooStorm', 'Poo Storm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PooStorm
include('fontawesome/Solid/PooStorm')

' renders the element
PooStorm('PooStorm', 'Poo Storm', 'an optional tech label', 'an optional description')
@enduml
```

