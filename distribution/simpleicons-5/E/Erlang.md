# Erlang


```text
simpleicons-5/E/Erlang
```

```text
include('simpleicons-5/E/Erlang')
```



| Illustration | Erlang |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Erlang.png) | ![illustration for Erlang](../../simpleicons-5/E/Erlang.Local.png) |




## Erlang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Erlang
include('simpleicons-5/E/Erlang')

' renders the element
Erlang('Erlang', 'Erlang', 'an optional tech label')
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

' loads the Item which embeds the element Erlang
include('simpleicons-5/E/Erlang')

' renders the element
Erlang('Erlang', 'Erlang', 'an optional tech label')
@enduml
```

