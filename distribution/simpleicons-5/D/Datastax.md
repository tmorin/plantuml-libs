# Datastax


```text
simpleicons-5/D/Datastax
```

```text
include('simpleicons-5/D/Datastax')
```



| Illustration | Datastax |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Datastax.png) | ![illustration for Datastax](../../simpleicons-5/D/Datastax.Local.png) |




## Datastax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Datastax
include('simpleicons-5/D/Datastax')

' renders the element
Datastax('Datastax', 'Datastax', 'an optional tech label')
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

' loads the Item which embeds the element Datastax
include('simpleicons-5/D/Datastax')

' renders the element
Datastax('Datastax', 'Datastax', 'an optional tech label')
@enduml
```

