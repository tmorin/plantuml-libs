# ViewAgenda


```text
material-4/Action/ViewAgenda
```

```text
include('material-4/Action/ViewAgenda')
```



| Illustration | ViewAgenda |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewAgenda.png) | ![illustration for ViewAgenda](../../material-4/Action/ViewAgenda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewAgendaXs>`
- `<$ViewAgendaSm>`
- `<$ViewAgendaMd>`
- `<$ViewAgendaLg>`





## ViewAgenda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewAgenda
include('material-4/Action/ViewAgenda')

' renders the element
ViewAgenda('ViewAgenda', 'View Agenda', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ViewAgenda
include('material-4/Action/ViewAgenda')

' renders the element
ViewAgenda('ViewAgenda', 'View Agenda', 'an optional tech label', 'an optional description')
@enduml
```

