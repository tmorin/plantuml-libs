# Logstash


```text
simpleicons-5/L/Logstash
```

```text
include('simpleicons-5/L/Logstash')
```



| Illustration | Logstash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Logstash.png) | ![illustration for Logstash](../../simpleicons-5/L/Logstash.Local.png) |




## Logstash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Logstash
include('simpleicons-5/L/Logstash')

' renders the element
Logstash('Logstash', 'Logstash', 'an optional tech label')
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

' loads the Item which embeds the element Logstash
include('simpleicons-5/L/Logstash')

' renders the element
Logstash('Logstash', 'Logstash', 'an optional tech label')
@enduml
```

