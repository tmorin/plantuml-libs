# Bugsnag


```text
simpleicons-5/B/Bugsnag
```

```text
include('simpleicons-5/B/Bugsnag')
```



| Illustration | Bugsnag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bugsnag.png) | ![illustration for Bugsnag](../../simpleicons-5/B/Bugsnag.Local.png) |




## Bugsnag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bugsnag
include('simpleicons-5/B/Bugsnag')

' renders the element
Bugsnag('Bugsnag', 'Bugsnag', 'an optional tech label')
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

' loads the Item which embeds the element Bugsnag
include('simpleicons-5/B/Bugsnag')

' renders the element
Bugsnag('Bugsnag', 'Bugsnag', 'an optional tech label')
@enduml
```

