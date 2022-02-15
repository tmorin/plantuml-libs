# TableList


```text
fontawesome-6/Solid/TableList
```

```text
include('fontawesome-6/Solid/TableList')
```



| Illustration | TableList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TableList.png) | ![illustration for TableList](../../fontawesome-6/Solid/TableList.Local.png) |




## TableList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TableList
include('fontawesome-6/Solid/TableList')

' renders the element
TableList('TableList', 'Table List', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TableList
include('fontawesome-6/Solid/TableList')

' renders the element
TableList('TableList', 'Table List', 'an optional tech label')
@enduml
```

