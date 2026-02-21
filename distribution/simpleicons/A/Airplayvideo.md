# Airplayvideo


```text
simpleicons/A/Airplayvideo
```

```text
include('simpleicons/A/Airplayvideo')
```



| Illustration | Airplayvideo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Airplayvideo.png) | ![illustration for Airplayvideo](../../simpleicons/A/Airplayvideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirplayvideoXs>`
- `<$AirplayvideoSm>`
- `<$AirplayvideoMd>`
- `<$AirplayvideoLg>`





## Airplayvideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Airplayvideo
include('simpleicons/A/Airplayvideo')

' renders the element
Airplayvideo('Airplayvideo', 'Airplayvideo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airplayvideo
include('simpleicons/A/Airplayvideo')

' renders the element
Airplayvideo('Airplayvideo', 'Airplayvideo', 'an optional tech label', 'an optional description')
@enduml
```

