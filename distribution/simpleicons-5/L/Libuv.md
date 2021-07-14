# Libuv


```text
simpleicons-5/L/Libuv
```

```text
include('simpleicons-5/L/Libuv')
```



| Illustration | Libuv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Libuv.png) | ![illustration for Libuv](../../simpleicons-5/L/Libuv.Local.png) |




## Libuv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Libuv
include('simpleicons-5/L/Libuv')

' renders the element
Libuv('Libuv', 'Libuv', 'an optional tech label')
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

' loads the Item which embeds the element Libuv
include('simpleicons-5/L/Libuv')

' renders the element
Libuv('Libuv', 'Libuv', 'an optional tech label')
@enduml
```

