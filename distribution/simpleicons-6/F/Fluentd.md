# Fluentd


```text
simpleicons-6/F/Fluentd
```

```text
include('simpleicons-6/F/Fluentd')
```



| Illustration | Fluentd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fluentd.png) | ![illustration for Fluentd](../../simpleicons-6/F/Fluentd.Local.png) |




## Fluentd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fluentd
include('simpleicons-6/F/Fluentd')

' renders the element
Fluentd('Fluentd', 'Fluentd', 'an optional tech label')
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

' loads the Item which embeds the element Fluentd
include('simpleicons-6/F/Fluentd')

' renders the element
Fluentd('Fluentd', 'Fluentd', 'an optional tech label')
@enduml
```

