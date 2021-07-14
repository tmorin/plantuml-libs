# Doordash


```text
simpleicons-5/D/Doordash
```

```text
include('simpleicons-5/D/Doordash')
```



| Illustration | Doordash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Doordash.png) | ![illustration for Doordash](../../simpleicons-5/D/Doordash.Local.png) |




## Doordash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Doordash
include('simpleicons-5/D/Doordash')

' renders the element
Doordash('Doordash', 'Doordash', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Doordash
include('simpleicons-5/D/Doordash')

' renders the element
Doordash('Doordash', 'Doordash', 'an optional tech label')
@enduml
```

