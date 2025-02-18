# Fastify


```text
simpleicons-14/F/Fastify
```

```text
include('simpleicons-14/F/Fastify')
```



| Illustration | Fastify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fastify.png) | ![illustration for Fastify](../../simpleicons-14/F/Fastify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FastifyXs>`
- `<$FastifySm>`
- `<$FastifyMd>`
- `<$FastifyLg>`





## Fastify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fastify
include('simpleicons-14/F/Fastify')

' renders the element
Fastify('Fastify', 'Fastify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fastify
include('simpleicons-14/F/Fastify')

' renders the element
Fastify('Fastify', 'Fastify', 'an optional tech label', 'an optional description')
@enduml
```

