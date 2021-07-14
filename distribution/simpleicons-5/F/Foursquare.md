# Foursquare


```text
simpleicons-5/F/Foursquare
```

```text
include('simpleicons-5/F/Foursquare')
```



| Illustration | Foursquare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Foursquare.png) | ![illustration for Foursquare](../../simpleicons-5/F/Foursquare.Local.png) |




## Foursquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Foursquare
include('simpleicons-5/F/Foursquare')

' renders the element
Foursquare('Foursquare', 'Foursquare', 'an optional tech label')
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

' loads the Item which embeds the element Foursquare
include('simpleicons-5/F/Foursquare')

' renders the element
Foursquare('Foursquare', 'Foursquare', 'an optional tech label')
@enduml
```

