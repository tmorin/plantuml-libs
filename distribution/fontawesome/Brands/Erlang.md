# Erlang


```text
fontawesome/Brands/Erlang
```

```text
include('fontawesome/Brands/Erlang')
```



| Illustration | Erlang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Erlang.png) | ![illustration for Erlang](../../fontawesome/Brands/Erlang.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Erlang
include('fontawesome/Brands/Erlang')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Erlang
include('fontawesome/Brands/Erlang')

' renders the element
Erlang('Erlang', 'Erlang', 'an optional tech label', 'an optional description')
@enduml
```

