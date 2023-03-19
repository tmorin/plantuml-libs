# Libuv


```text
simpleicons-8/L/Libuv
```

```text
include('simpleicons-8/L/Libuv')
```



| Illustration | Libuv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Libuv.png) | ![illustration for Libuv](../../simpleicons-8/L/Libuv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibuvXs>`
- `<$LibuvSm>`
- `<$LibuvMd>`
- `<$LibuvLg>`





## Libuv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Libuv
include('simpleicons-8/L/Libuv')

' renders the element
Libuv('Libuv', 'Libuv', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Libuv
include('simpleicons-8/L/Libuv')

' renders the element
Libuv('Libuv', 'Libuv', 'an optional tech label', 'an optional description')
@enduml
```

