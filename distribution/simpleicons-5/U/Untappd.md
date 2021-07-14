# Untappd


```text
simpleicons-5/U/Untappd
```

```text
include('simpleicons-5/U/Untappd')
```



| Illustration | Untappd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Untappd.png) | ![illustration for Untappd](../../simpleicons-5/U/Untappd.Local.png) |




## Untappd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Untappd
include('simpleicons-5/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label')
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

' loads the Item which embeds the element Untappd
include('simpleicons-5/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label')
@enduml
```

