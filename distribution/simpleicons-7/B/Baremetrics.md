# Baremetrics


```text
simpleicons-7/B/Baremetrics
```

```text
include('simpleicons-7/B/Baremetrics')
```



| Illustration | Baremetrics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Baremetrics.png) | ![illustration for Baremetrics](../../simpleicons-7/B/Baremetrics.Local.png) |




## Baremetrics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Baremetrics
include('simpleicons-7/B/Baremetrics')

' renders the element
Baremetrics('Baremetrics', 'Baremetrics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baremetrics
include('simpleicons-7/B/Baremetrics')

' renders the element
Baremetrics('Baremetrics', 'Baremetrics', 'an optional tech label', 'an optional description')
@enduml
```

