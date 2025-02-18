# Soundcharts


```text
simpleicons-14/S/Soundcharts
```

```text
include('simpleicons-14/S/Soundcharts')
```



| Illustration | Soundcharts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Soundcharts.png) | ![illustration for Soundcharts](../../simpleicons-14/S/Soundcharts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SoundchartsXs>`
- `<$SoundchartsSm>`
- `<$SoundchartsMd>`
- `<$SoundchartsLg>`





## Soundcharts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Soundcharts
include('simpleicons-14/S/Soundcharts')

' renders the element
Soundcharts('Soundcharts', 'Soundcharts', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Soundcharts
include('simpleicons-14/S/Soundcharts')

' renders the element
Soundcharts('Soundcharts', 'Soundcharts', 'an optional tech label', 'an optional description')
@enduml
```

