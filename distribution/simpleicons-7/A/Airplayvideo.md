# Airplayvideo


```text
simpleicons-7/A/Airplayvideo
```

```text
include('simpleicons-7/A/Airplayvideo')
```



| Illustration | Airplayvideo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Airplayvideo.png) | ![illustration for Airplayvideo](../../simpleicons-7/A/Airplayvideo.Local.png) |




## Airplayvideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Airplayvideo
include('simpleicons-7/A/Airplayvideo')

' renders the element
Airplayvideo('Airplayvideo', 'Airplayvideo', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Airplayvideo
include('simpleicons-7/A/Airplayvideo')

' renders the element
Airplayvideo('Airplayvideo', 'Airplayvideo', 'an optional tech label')
@enduml
```

