# History


```text
material/Action/History
```

```text
include('material/Action/History')
```



| Illustration | History |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/History.png) | ![illustration for History](../../material/Action/History.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HistoryXs>`
- `<$HistorySm>`
- `<$HistoryMd>`
- `<$HistoryLg>`





## History

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element History
include('material/Action/History')

' renders the element
History('History', 'History', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element History
include('material/Action/History')

' renders the element
History('History', 'History', 'an optional tech label', 'an optional description')
@enduml
```

