# NextWeek


```text
material/Content/NextWeek
```

```text
include('material/Content/NextWeek')
```



| Illustration | NextWeek |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/NextWeek.png) | ![illustration for NextWeek](../../material/Content/NextWeek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextWeekXs>`
- `<$NextWeekSm>`
- `<$NextWeekMd>`
- `<$NextWeekLg>`





## NextWeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NextWeek
include('material/Content/NextWeek')

' renders the element
NextWeek('NextWeek', 'Next Week', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NextWeek
include('material/Content/NextWeek')

' renders the element
NextWeek('NextWeek', 'Next Week', 'an optional tech label', 'an optional description')
@enduml
```

