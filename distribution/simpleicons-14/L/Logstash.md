# Logstash


```text
simpleicons-14/L/Logstash
```

```text
include('simpleicons-14/L/Logstash')
```



| Illustration | Logstash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Logstash.png) | ![illustration for Logstash](../../simpleicons-14/L/Logstash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LogstashXs>`
- `<$LogstashSm>`
- `<$LogstashMd>`
- `<$LogstashLg>`





## Logstash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Logstash
include('simpleicons-14/L/Logstash')

' renders the element
Logstash('Logstash', 'Logstash', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Logstash
include('simpleicons-14/L/Logstash')

' renders the element
Logstash('Logstash', 'Logstash', 'an optional tech label', 'an optional description')
@enduml
```

