# Raspberrypi


```text
simpleicons-8/R/Raspberrypi
```

```text
include('simpleicons-8/R/Raspberrypi')
```



| Illustration | Raspberrypi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Raspberrypi.png) | ![illustration for Raspberrypi](../../simpleicons-8/R/Raspberrypi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RaspberrypiXs>`
- `<$RaspberrypiSm>`
- `<$RaspberrypiMd>`
- `<$RaspberrypiLg>`





## Raspberrypi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Raspberrypi
include('simpleicons-8/R/Raspberrypi')

' renders the element
Raspberrypi('Raspberrypi', 'Raspberrypi', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Raspberrypi
include('simpleicons-8/R/Raspberrypi')

' renders the element
Raspberrypi('Raspberrypi', 'Raspberrypi', 'an optional tech label', 'an optional description')
@enduml
```

