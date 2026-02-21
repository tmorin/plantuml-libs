# Timescale


```text
simpleicons/T/Timescale
```

```text
include('simpleicons/T/Timescale')
```



| Illustration | Timescale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Timescale.png) | ![illustration for Timescale](../../simpleicons/T/Timescale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TimescaleXs>`
- `<$TimescaleSm>`
- `<$TimescaleMd>`
- `<$TimescaleLg>`





## Timescale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Timescale
include('simpleicons/T/Timescale')

' renders the element
Timescale('Timescale', 'Timescale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Timescale
include('simpleicons/T/Timescale')

' renders the element
Timescale('Timescale', 'Timescale', 'an optional tech label', 'an optional description')
@enduml
```

