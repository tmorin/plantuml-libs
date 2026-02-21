# ViewDay


```text
material/Action/ViewDay
```

```text
include('material/Action/ViewDay')
```



| Illustration | ViewDay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ViewDay.png) | ![illustration for ViewDay](../../material/Action/ViewDay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewDayXs>`
- `<$ViewDaySm>`
- `<$ViewDayMd>`
- `<$ViewDayLg>`





## ViewDay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ViewDay
include('material/Action/ViewDay')

' renders the element
ViewDay('ViewDay', 'View Day', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewDay
include('material/Action/ViewDay')

' renders the element
ViewDay('ViewDay', 'View Day', 'an optional tech label', 'an optional description')
@enduml
```

