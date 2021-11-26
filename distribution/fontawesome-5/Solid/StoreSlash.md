# StoreSlash


```text
fontawesome-5/Solid/StoreSlash
```

```text
include('fontawesome-5/Solid/StoreSlash')
```



| Illustration | StoreSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StoreSlash.png) | ![illustration for StoreSlash](../../fontawesome-5/Solid/StoreSlash.Local.png) |




## StoreSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StoreSlash
include('fontawesome-5/Solid/StoreSlash')

' renders the element
StoreSlash('StoreSlash', 'Store Slash', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StoreSlash
include('fontawesome-5/Solid/StoreSlash')

' renders the element
StoreSlash('StoreSlash', 'Store Slash', 'an optional tech label')
@enduml
```

