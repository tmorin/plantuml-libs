# StoreSlash


```text
fontawesome-6/Solid/StoreSlash
```

```text
include('fontawesome-6/Solid/StoreSlash')
```



| Illustration | StoreSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/StoreSlash.png) | ![illustration for StoreSlash](../../fontawesome-6/Solid/StoreSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StoreSlashXs>`
- `<$StoreSlashSm>`
- `<$StoreSlashMd>`
- `<$StoreSlashLg>`





## StoreSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StoreSlash
include('fontawesome-6/Solid/StoreSlash')

' renders the element
StoreSlash('StoreSlash', 'Store Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StoreSlash
include('fontawesome-6/Solid/StoreSlash')

' renders the element
StoreSlash('StoreSlash', 'Store Slash', 'an optional tech label', 'an optional description')
@enduml
```

