# Googlemeet


```text
simpleicons-6/G/Googlemeet
```

```text
include('simpleicons-6/G/Googlemeet')
```



| Illustration | Googlemeet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlemeet.png) | ![illustration for Googlemeet](../../simpleicons-6/G/Googlemeet.Local.png) |




## Googlemeet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlemeet
include('simpleicons-6/G/Googlemeet')

' renders the element
Googlemeet('Googlemeet', 'Googlemeet', 'an optional tech label')
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

' loads the Item which embeds the element Googlemeet
include('simpleicons-6/G/Googlemeet')

' renders the element
Googlemeet('Googlemeet', 'Googlemeet', 'an optional tech label')
@enduml
```

