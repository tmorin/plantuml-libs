# FilterListAlt


```text
material-4/Action/FilterListAlt
```

```text
include('material-4/Action/FilterListAlt')
```



| Illustration | FilterListAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FilterListAlt.png) | ![illustration for FilterListAlt](../../material-4/Action/FilterListAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterListAltXs>`
- `<$FilterListAltSm>`
- `<$FilterListAltMd>`
- `<$FilterListAltLg>`





## FilterListAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterListAlt
include('material-4/Action/FilterListAlt')

' renders the element
FilterListAlt('FilterListAlt', 'Filter List Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterListAlt
include('material-4/Action/FilterListAlt')

' renders the element
FilterListAlt('FilterListAlt', 'Filter List Alt', 'an optional tech label', 'an optional description')
@enduml
```

