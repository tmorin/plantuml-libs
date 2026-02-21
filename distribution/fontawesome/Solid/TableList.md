# TableList


```text
fontawesome/Solid/TableList
```

```text
include('fontawesome/Solid/TableList')
```



| Illustration | TableList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TableList.png) | ![illustration for TableList](../../fontawesome/Solid/TableList.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TableListXs>`
- `<$TableListSm>`
- `<$TableListMd>`
- `<$TableListLg>`





## TableList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TableList
include('fontawesome/Solid/TableList')

' renders the element
TableList('TableList', 'Table List', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element TableList
include('fontawesome/Solid/TableList')

' renders the element
TableList('TableList', 'Table List', 'an optional tech label', 'an optional description')
@enduml
```

