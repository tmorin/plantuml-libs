# Search


```text
material-4/Action/Search
```

```text
include('material-4/Action/Search')
```



| Illustration | Search |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Search.png) | ![illustration for Search](../../material-4/Action/Search.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchXs>`
- `<$SearchSm>`
- `<$SearchMd>`
- `<$SearchLg>`





## Search

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Search
include('material-4/Action/Search')

' renders the element
Search('Search', 'Search', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Search
include('material-4/Action/Search')

' renders the element
Search('Search', 'Search', 'an optional tech label', 'an optional description')
@enduml
```

