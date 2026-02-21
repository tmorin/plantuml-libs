# Airplay


```text
material/Av/Airplay
```

```text
include('material/Av/Airplay')
```



| Illustration | Airplay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Airplay.png) | ![illustration for Airplay](../../material/Av/Airplay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirplayXs>`
- `<$AirplaySm>`
- `<$AirplayMd>`
- `<$AirplayLg>`





## Airplay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Airplay
include('material/Av/Airplay')

' renders the element
Airplay('Airplay', 'Airplay', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Airplay
include('material/Av/Airplay')

' renders the element
Airplay('Airplay', 'Airplay', 'an optional tech label', 'an optional description')
@enduml
```

