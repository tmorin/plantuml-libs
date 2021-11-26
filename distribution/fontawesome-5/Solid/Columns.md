# Columns


```text
fontawesome-5/Solid/Columns
```

```text
include('fontawesome-5/Solid/Columns')
```



| Illustration | Columns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Columns.png) | ![illustration for Columns](../../fontawesome-5/Solid/Columns.Local.png) |




## Columns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Columns
include('fontawesome-5/Solid/Columns')

' renders the element
Columns('Columns', 'Columns', 'an optional tech label')
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

' loads the Item which embeds the element Columns
include('fontawesome-5/Solid/Columns')

' renders the element
Columns('Columns', 'Columns', 'an optional tech label')
@enduml
```

