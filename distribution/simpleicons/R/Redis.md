# Redis


```text
simpleicons/R/Redis
```

```text
include('simpleicons/R/Redis')
```



| Illustration | Redis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redis.png) | ![illustration for Redis](../../simpleicons/R/Redis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedisXs>`
- `<$RedisSm>`
- `<$RedisMd>`
- `<$RedisLg>`





## Redis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redis
include('simpleicons/R/Redis')

' renders the element
Redis('Redis', 'Redis', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redis
include('simpleicons/R/Redis')

' renders the element
Redis('Redis', 'Redis', 'an optional tech label', 'an optional description')
@enduml
```

