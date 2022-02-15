# Swagger


```text
simpleicons-6/S/Swagger
```

```text
include('simpleicons-6/S/Swagger')
```



| Illustration | Swagger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Swagger.png) | ![illustration for Swagger](../../simpleicons-6/S/Swagger.Local.png) |




## Swagger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Swagger
include('simpleicons-6/S/Swagger')

' renders the element
Swagger('Swagger', 'Swagger', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Swagger
include('simpleicons-6/S/Swagger')

' renders the element
Swagger('Swagger', 'Swagger', 'an optional tech label')
@enduml
```

