# Geocaching


```text
simpleicons-6/G/Geocaching
```

```text
include('simpleicons-6/G/Geocaching')
```



| Illustration | Geocaching |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Geocaching.png) | ![illustration for Geocaching](../../simpleicons-6/G/Geocaching.Local.png) |




## Geocaching

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Geocaching
include('simpleicons-6/G/Geocaching')

' renders the element
Geocaching('Geocaching', 'Geocaching', 'an optional tech label')
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

' loads the Item which embeds the element Geocaching
include('simpleicons-6/G/Geocaching')

' renders the element
Geocaching('Geocaching', 'Geocaching', 'an optional tech label')
@enduml
```

