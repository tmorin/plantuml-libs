# Airplayvideo


```text
simpleicons-5/A/Airplayvideo
```

```text
include('simpleicons-5/A/Airplayvideo')
```



| Illustration | Airplayvideo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Airplayvideo.png) | ![illustration for Airplayvideo](../../simpleicons-5/A/Airplayvideo.Local.png) |




## Airplayvideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airplayvideo
include('simpleicons-5/A/Airplayvideo')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airplayvideo
include('simpleicons-5/A/Airplayvideo')

' renders the element
Airplayvideo('Airplayvideo', 'Airplayvideo', 'an optional tech label')
@enduml
```

