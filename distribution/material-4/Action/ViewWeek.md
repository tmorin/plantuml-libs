# ViewWeek


```text
material-4/Action/ViewWeek
```

```text
include('material-4/Action/ViewWeek')
```



| Illustration | ViewWeek |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewWeek.png) | ![illustration for ViewWeek](../../material-4/Action/ViewWeek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewWeekXs>`
- `<$ViewWeekSm>`
- `<$ViewWeekMd>`
- `<$ViewWeekLg>`





## ViewWeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewWeek
include('material-4/Action/ViewWeek')

' renders the element
ViewWeek('ViewWeek', 'View Week', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewWeek
include('material-4/Action/ViewWeek')

' renders the element
ViewWeek('ViewWeek', 'View Week', 'an optional tech label', 'an optional description')
@enduml
```

