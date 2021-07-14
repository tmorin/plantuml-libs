# Postman


```text
simpleicons-5/P/Postman
```

```text
include('simpleicons-5/P/Postman')
```



| Illustration | Postman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Postman.png) | ![illustration for Postman](../../simpleicons-5/P/Postman.Local.png) |




## Postman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Postman
include('simpleicons-5/P/Postman')

' renders the element
Postman('Postman', 'Postman', 'an optional tech label')
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

' loads the Item which embeds the element Postman
include('simpleicons-5/P/Postman')

' renders the element
Postman('Postman', 'Postman', 'an optional tech label')
@enduml
```

