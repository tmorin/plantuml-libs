# Erlang


```text
simpleicons-14/E/Erlang
```

```text
include('simpleicons-14/E/Erlang')
```



| Illustration | Erlang |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Erlang.png) | ![illustration for Erlang](../../simpleicons-14/E/Erlang.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ErlangXs>`
- `<$ErlangSm>`
- `<$ErlangMd>`
- `<$ErlangLg>`





## Erlang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Erlang
include('simpleicons-14/E/Erlang')

' renders the element
Erlang('Erlang', 'Erlang', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Erlang
include('simpleicons-14/E/Erlang')

' renders the element
Erlang('Erlang', 'Erlang', 'an optional tech label', 'an optional description')
@enduml
```

