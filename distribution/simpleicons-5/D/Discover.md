# Discover


```text
simpleicons-5/D/Discover
```

```text
include('simpleicons-5/D/Discover')
```



| Illustration | Discover |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Discover.png) | ![illustration for Discover](../../simpleicons-5/D/Discover.Local.png) |




## Discover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Discover
include('simpleicons-5/D/Discover')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Discover
include('simpleicons-5/D/Discover')

' renders the element
Discover('Discover', 'Discover', 'an optional tech label')
@enduml
```

