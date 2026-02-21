# Store


```text
material/Action/Store
```

```text
include('material/Action/Store')
```



| Illustration | Store |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Store.png) | ![illustration for Store](../../material/Action/Store.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StoreXs>`
- `<$StoreSm>`
- `<$StoreMd>`
- `<$StoreLg>`





## Store

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Store
include('material/Action/Store')

' renders the element
Store('Store', 'Store', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Store
include('material/Action/Store')

' renders the element
Store('Store', 'Store', 'an optional tech label', 'an optional description')
@enduml
```

