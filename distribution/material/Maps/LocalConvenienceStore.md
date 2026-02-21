# LocalConvenienceStore


```text
material/Maps/LocalConvenienceStore
```

```text
include('material/Maps/LocalConvenienceStore')
```



| Illustration | LocalConvenienceStore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalConvenienceStore.png) | ![illustration for LocalConvenienceStore](../../material/Maps/LocalConvenienceStore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalConvenienceStoreXs>`
- `<$LocalConvenienceStoreSm>`
- `<$LocalConvenienceStoreMd>`
- `<$LocalConvenienceStoreLg>`





## LocalConvenienceStore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalConvenienceStore
include('material/Maps/LocalConvenienceStore')

' renders the element
LocalConvenienceStore('LocalConvenienceStore', 'Local Convenience Store', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalConvenienceStore
include('material/Maps/LocalConvenienceStore')

' renders the element
LocalConvenienceStore('LocalConvenienceStore', 'Local Convenience Store', 'an optional tech label', 'an optional description')
@enduml
```

