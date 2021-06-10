# TableTennis


```text
fontawesome-5/Solid/TableTennis
```

```text
include('fontawesome-5/Solid/TableTennis')
```



| Illustration | TableTennis |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TableTennis.png) | ![illustration for TableTennis](../../fontawesome-5/Solid/TableTennis.Local.png) |




## TableTennis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TableTennis
include('fontawesome-5/Solid/TableTennis')

' renders the element
TableTennis('TableTennis', 'Table Tennis', 'an optional tech label')
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

' loads the Item which embeds the element TableTennis
include('fontawesome-5/Solid/TableTennis')

' renders the element
TableTennis('TableTennis', 'Table Tennis', 'an optional tech label')
@enduml
```

