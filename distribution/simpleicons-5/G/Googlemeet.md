# Googlemeet


```text
simpleicons-5/G/Googlemeet
```

```text
include('simpleicons-5/G/Googlemeet')
```



| Illustration | Googlemeet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlemeet.png) | ![illustration for Googlemeet](../../simpleicons-5/G/Googlemeet.Local.png) |




## Googlemeet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlemeet
include('simpleicons-5/G/Googlemeet')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlemeet
include('simpleicons-5/G/Googlemeet')

' renders the element
Googlemeet('Googlemeet', 'Googlemeet', 'an optional tech label')
@enduml
```

