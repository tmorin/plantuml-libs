# CastConnected


```text
material/Hardware/CastConnected
```

```text
include('material/Hardware/CastConnected')
```



| Illustration | CastConnected |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/CastConnected.png) | ![illustration for CastConnected](../../material/Hardware/CastConnected.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CastConnectedXs>`
- `<$CastConnectedSm>`
- `<$CastConnectedMd>`
- `<$CastConnectedLg>`





## CastConnected

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CastConnected
include('material/Hardware/CastConnected')

' renders the element
CastConnected('CastConnected', 'Cast Connected', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CastConnected
include('material/Hardware/CastConnected')

' renders the element
CastConnected('CastConnected', 'Cast Connected', 'an optional tech label', 'an optional description')
@enduml
```

