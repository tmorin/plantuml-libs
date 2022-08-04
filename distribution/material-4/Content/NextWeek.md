# NextWeek


```text
material-4/Content/NextWeek
```

```text
include('material-4/Content/NextWeek')
```



| Illustration | NextWeek |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/NextWeek.png) | ![illustration for NextWeek](../../material-4/Content/NextWeek.Local.png) |




## NextWeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NextWeek
include('material-4/Content/NextWeek')

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
include('material-4/bootstrap')

' loads the Item which embeds the element NextWeek
include('material-4/Content/NextWeek')

' renders the element
NextWeek('NextWeek', 'Next Week', 'an optional tech label', 'an optional description')
@enduml
```

