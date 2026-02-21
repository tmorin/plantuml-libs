# Libuv


```text
simpleicons/L/Libuv
```

```text
include('simpleicons/L/Libuv')
```



| Illustration | Libuv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Libuv.png) | ![illustration for Libuv](../../simpleicons/L/Libuv.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libuv
include('simpleicons/L/Libuv')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libuv
include('simpleicons/L/Libuv')

' renders the element
Libuv('Libuv', 'Libuv', 'an optional tech label', 'an optional description')
@enduml
```

