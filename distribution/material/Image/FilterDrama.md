# FilterDrama


```text
material/Image/FilterDrama
```

```text
include('material/Image/FilterDrama')
```



| Illustration | FilterDrama |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FilterDrama.png) | ![illustration for FilterDrama](../../material/Image/FilterDrama.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterDramaXs>`
- `<$FilterDramaSm>`
- `<$FilterDramaMd>`
- `<$FilterDramaLg>`





## FilterDrama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterDrama
include('material/Image/FilterDrama')

' renders the element
FilterDrama('FilterDrama', 'Filter Drama', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterDrama
include('material/Image/FilterDrama')

' renders the element
FilterDrama('FilterDrama', 'Filter Drama', 'an optional tech label', 'an optional description')
@enduml
```

