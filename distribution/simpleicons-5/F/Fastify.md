# Fastify


```text
simpleicons-5/F/Fastify
```

```text
include('simpleicons-5/F/Fastify')
```



| Illustration | Fastify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fastify.png) | ![illustration for Fastify](../../simpleicons-5/F/Fastify.Local.png) |




## Fastify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fastify
include('simpleicons-5/F/Fastify')

' renders the element
Fastify('Fastify', 'Fastify', 'an optional tech label')
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

' loads the Item which embeds the element Fastify
include('simpleicons-5/F/Fastify')

' renders the element
Fastify('Fastify', 'Fastify', 'an optional tech label')
@enduml
```

