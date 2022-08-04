# Postman


```text
simpleicons-7/P/Postman
```

```text
include('simpleicons-7/P/Postman')
```



| Illustration | Postman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Postman.png) | ![illustration for Postman](../../simpleicons-7/P/Postman.Local.png) |




## Postman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Postman
include('simpleicons-7/P/Postman')

' renders the element
Postman('Postman', 'Postman', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Postman
include('simpleicons-7/P/Postman')

' renders the element
Postman('Postman', 'Postman', 'an optional tech label', 'an optional description')
@enduml
```

