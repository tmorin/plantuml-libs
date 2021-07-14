# Googlemaps


```text
simpleicons-5/G/Googlemaps
```

```text
include('simpleicons-5/G/Googlemaps')
```



| Illustration | Googlemaps |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlemaps.png) | ![illustration for Googlemaps](../../simpleicons-5/G/Googlemaps.Local.png) |




## Googlemaps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlemaps
include('simpleicons-5/G/Googlemaps')

' renders the element
Googlemaps('Googlemaps', 'Googlemaps', 'an optional tech label')
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

' loads the Item which embeds the element Googlemaps
include('simpleicons-5/G/Googlemaps')

' renders the element
Googlemaps('Googlemaps', 'Googlemaps', 'an optional tech label')
@enduml
```

