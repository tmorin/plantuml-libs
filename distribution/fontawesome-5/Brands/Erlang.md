# Erlang


```text
fontawesome-5/Brands/Erlang
```

```text
include('fontawesome-5/Brands/Erlang')
```



| Illustration | Erlang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Erlang.png) | ![illustration for Erlang](../../fontawesome-5/Brands/Erlang.Local.png) |




## Erlang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Erlang
include('fontawesome-5/Brands/Erlang')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Erlang
include('fontawesome-5/Brands/Erlang')

' renders the element
Erlang('Erlang', 'Erlang', 'an optional tech label')
@enduml
```

