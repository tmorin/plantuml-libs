# Untappd


```text
simpleicons-7/U/Untappd
```

```text
include('simpleicons-7/U/Untappd')
```



| Illustration | Untappd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Untappd.png) | ![illustration for Untappd](../../simpleicons-7/U/Untappd.Local.png) |




## Untappd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Untappd
include('simpleicons-7/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Untappd
include('simpleicons-7/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
@enduml
```

