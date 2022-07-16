# Googlemeet


```text
simpleicons-7/G/Googlemeet
```

```text
include('simpleicons-7/G/Googlemeet')
```



| Illustration | Googlemeet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlemeet.png) | ![illustration for Googlemeet](../../simpleicons-7/G/Googlemeet.Local.png) |




## Googlemeet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlemeet
include('simpleicons-7/G/Googlemeet')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlemeet
include('simpleicons-7/G/Googlemeet')

' renders the element
Googlemeet('Googlemeet', 'Googlemeet', 'an optional tech label')
@enduml
```

