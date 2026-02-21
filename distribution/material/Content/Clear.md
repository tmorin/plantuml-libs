# Clear


```text
material/Content/Clear
```

```text
include('material/Content/Clear')
```



| Illustration | Clear |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Clear.png) | ![illustration for Clear](../../material/Content/Clear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClearXs>`
- `<$ClearSm>`
- `<$ClearMd>`
- `<$ClearLg>`





## Clear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Clear
include('material/Content/Clear')

' renders the element
Clear('Clear', 'Clear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clear
include('material/Content/Clear')

' renders the element
Clear('Clear', 'Clear', 'an optional tech label', 'an optional description')
@enduml
```

