# Graylog


```text
simpleicons-5/G/Graylog
```

```text
include('simpleicons-5/G/Graylog')
```



| Illustration | Graylog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Graylog.png) | ![illustration for Graylog](../../simpleicons-5/G/Graylog.Local.png) |




## Graylog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Graylog
include('simpleicons-5/G/Graylog')

' renders the element
Graylog('Graylog', 'Graylog', 'an optional tech label')
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

' loads the Item which embeds the element Graylog
include('simpleicons-5/G/Graylog')

' renders the element
Graylog('Graylog', 'Graylog', 'an optional tech label')
@enduml
```

