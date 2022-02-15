# Newrelic


```text
simpleicons-6/N/Newrelic
```

```text
include('simpleicons-6/N/Newrelic')
```



| Illustration | Newrelic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Newrelic.png) | ![illustration for Newrelic](../../simpleicons-6/N/Newrelic.Local.png) |




## Newrelic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Newrelic
include('simpleicons-6/N/Newrelic')

' renders the element
Newrelic('Newrelic', 'Newrelic', 'an optional tech label')
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

' loads the Item which embeds the element Newrelic
include('simpleicons-6/N/Newrelic')

' renders the element
Newrelic('Newrelic', 'Newrelic', 'an optional tech label')
@enduml
```

