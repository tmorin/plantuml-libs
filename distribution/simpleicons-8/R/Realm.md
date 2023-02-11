# Realm


```text
simpleicons-8/R/Realm
```

```text
include('simpleicons-8/R/Realm')
```



| Illustration | Realm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Realm.png) | ![illustration for Realm](../../simpleicons-8/R/Realm.Local.png) |




## Realm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Realm
include('simpleicons-8/R/Realm')

' renders the element
Realm('Realm', 'Realm', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Realm
include('simpleicons-8/R/Realm')

' renders the element
Realm('Realm', 'Realm', 'an optional tech label', 'an optional description')
@enduml
```

