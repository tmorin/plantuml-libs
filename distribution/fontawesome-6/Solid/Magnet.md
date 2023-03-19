# Magnet


```text
fontawesome-6/Solid/Magnet
```

```text
include('fontawesome-6/Solid/Magnet')
```



| Illustration | Magnet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Magnet.png) | ![illustration for Magnet](../../fontawesome-6/Solid/Magnet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagnetXs>`
- `<$MagnetSm>`
- `<$MagnetMd>`
- `<$MagnetLg>`





## Magnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Magnet
include('fontawesome-6/Solid/Magnet')

' renders the element
Magnet('Magnet', 'Magnet', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Magnet
include('fontawesome-6/Solid/Magnet')

' renders the element
Magnet('Magnet', 'Magnet', 'an optional tech label', 'an optional description')
@enduml
```

