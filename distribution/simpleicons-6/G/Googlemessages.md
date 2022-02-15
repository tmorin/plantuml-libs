# Googlemessages


```text
simpleicons-6/G/Googlemessages
```

```text
include('simpleicons-6/G/Googlemessages')
```



| Illustration | Googlemessages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlemessages.png) | ![illustration for Googlemessages](../../simpleicons-6/G/Googlemessages.Local.png) |




## Googlemessages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlemessages
include('simpleicons-6/G/Googlemessages')

' renders the element
Googlemessages('Googlemessages', 'Googlemessages', 'an optional tech label')
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

' loads the Item which embeds the element Googlemessages
include('simpleicons-6/G/Googlemessages')

' renders the element
Googlemessages('Googlemessages', 'Googlemessages', 'an optional tech label')
@enduml
```

