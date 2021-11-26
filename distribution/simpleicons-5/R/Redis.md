# Redis


```text
simpleicons-5/R/Redis
```

```text
include('simpleicons-5/R/Redis')
```



| Illustration | Redis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Redis.png) | ![illustration for Redis](../../simpleicons-5/R/Redis.Local.png) |




## Redis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Redis
include('simpleicons-5/R/Redis')

' renders the element
Redis('Redis', 'Redis', 'an optional tech label')
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

' loads the Item which embeds the element Redis
include('simpleicons-5/R/Redis')

' renders the element
Redis('Redis', 'Redis', 'an optional tech label')
@enduml
```

