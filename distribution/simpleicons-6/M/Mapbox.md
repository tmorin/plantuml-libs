# Mapbox


```text
simpleicons-6/M/Mapbox
```

```text
include('simpleicons-6/M/Mapbox')
```



| Illustration | Mapbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mapbox.png) | ![illustration for Mapbox](../../simpleicons-6/M/Mapbox.Local.png) |




## Mapbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mapbox
include('simpleicons-6/M/Mapbox')

' renders the element
Mapbox('Mapbox', 'Mapbox', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mapbox
include('simpleicons-6/M/Mapbox')

' renders the element
Mapbox('Mapbox', 'Mapbox', 'an optional tech label')
@enduml
```

