# Geocaching


```text
simpleicons-7/G/Geocaching
```

```text
include('simpleicons-7/G/Geocaching')
```



| Illustration | Geocaching |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Geocaching.png) | ![illustration for Geocaching](../../simpleicons-7/G/Geocaching.Local.png) |




## Geocaching

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Geocaching
include('simpleicons-7/G/Geocaching')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Geocaching
include('simpleicons-7/G/Geocaching')

' renders the element
Geocaching('Geocaching', 'Geocaching', 'an optional tech label')
@enduml
```

