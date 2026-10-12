# Radiantearth


```text
simpleicons/R/Radiantearth
```

```text
include('simpleicons/R/Radiantearth')
```



| Illustration | Radiantearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Radiantearth.png) | ![illustration for Radiantearth](../../simpleicons/R/Radiantearth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadiantearthXs>`
- `<$RadiantearthSm>`
- `<$RadiantearthMd>`
- `<$RadiantearthLg>`





## Radiantearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Radiantearth
include('simpleicons/R/Radiantearth')

' renders the element
Radiantearth('Radiantearth', 'Radiantearth', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Radiantearth
include('simpleicons/R/Radiantearth')

' renders the element
Radiantearth('Radiantearth', 'Radiantearth', 'an optional tech label', 'an optional description')
@enduml
```

