# WineBottle


```text
fontawesome/Solid/WineBottle
```

```text
include('fontawesome/Solid/WineBottle')
```



| Illustration | WineBottle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WineBottle.png) | ![illustration for WineBottle](../../fontawesome/Solid/WineBottle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WineBottleXs>`
- `<$WineBottleSm>`
- `<$WineBottleMd>`
- `<$WineBottleLg>`





## WineBottle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WineBottle
include('fontawesome/Solid/WineBottle')

' renders the element
WineBottle('WineBottle', 'Wine Bottle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WineBottle
include('fontawesome/Solid/WineBottle')

' renders the element
WineBottle('WineBottle', 'Wine Bottle', 'an optional tech label', 'an optional description')
@enduml
```

