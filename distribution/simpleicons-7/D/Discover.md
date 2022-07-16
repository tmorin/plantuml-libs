# Discover


```text
simpleicons-7/D/Discover
```

```text
include('simpleicons-7/D/Discover')
```



| Illustration | Discover |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Discover.png) | ![illustration for Discover](../../simpleicons-7/D/Discover.Local.png) |




## Discover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Discover
include('simpleicons-7/D/Discover')

' renders the element
Discover('Discover', 'Discover', 'an optional tech label')
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

' loads the Item which embeds the element Discover
include('simpleicons-7/D/Discover')

' renders the element
Discover('Discover', 'Discover', 'an optional tech label')
@enduml
```

