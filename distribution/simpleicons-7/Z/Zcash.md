# Zcash


```text
simpleicons-7/Z/Zcash
```

```text
include('simpleicons-7/Z/Zcash')
```



| Illustration | Zcash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zcash.png) | ![illustration for Zcash](../../simpleicons-7/Z/Zcash.Local.png) |




## Zcash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zcash
include('simpleicons-7/Z/Zcash')

' renders the element
Zcash('Zcash', 'Zcash', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zcash
include('simpleicons-7/Z/Zcash')

' renders the element
Zcash('Zcash', 'Zcash', 'an optional tech label')
@enduml
```

