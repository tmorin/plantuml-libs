# FilterList


```text
material/Content/FilterList
```

```text
include('material/Content/FilterList')
```



| Illustration | FilterList |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/FilterList.png) | ![illustration for FilterList](../../material/Content/FilterList.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterListXs>`
- `<$FilterListSm>`
- `<$FilterListMd>`
- `<$FilterListLg>`





## FilterList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterList
include('material/Content/FilterList')

' renders the element
FilterList('FilterList', 'Filter List', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterList
include('material/Content/FilterList')

' renders the element
FilterList('FilterList', 'Filter List', 'an optional tech label', 'an optional description')
@enduml
```

