# Store


```text
fontawesome/Solid/Store
```

```text
include('fontawesome/Solid/Store')
```



| Illustration | Store |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Store.png) | ![illustration for Store](../../fontawesome/Solid/Store.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Store
include('fontawesome/Solid/Store')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Store
include('fontawesome/Solid/Store')

' renders the element
Store('Store', 'Store', 'an optional tech label', 'an optional description')
@enduml
```

