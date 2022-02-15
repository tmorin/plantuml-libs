# Foursquarecityguide


```text
simpleicons-6/F/Foursquarecityguide
```

```text
include('simpleicons-6/F/Foursquarecityguide')
```



| Illustration | Foursquarecityguide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Foursquarecityguide.png) | ![illustration for Foursquarecityguide](../../simpleicons-6/F/Foursquarecityguide.Local.png) |




## Foursquarecityguide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Foursquarecityguide
include('simpleicons-6/F/Foursquarecityguide')

' renders the element
Foursquarecityguide('Foursquarecityguide', 'Foursquarecityguide', 'an optional tech label')
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

' loads the Item which embeds the element Foursquarecityguide
include('simpleicons-6/F/Foursquarecityguide')

' renders the element
Foursquarecityguide('Foursquarecityguide', 'Foursquarecityguide', 'an optional tech label')
@enduml
```

