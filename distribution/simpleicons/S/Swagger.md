# Swagger


```text
simpleicons/S/Swagger
```

```text
include('simpleicons/S/Swagger')
```



| Illustration | Swagger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Swagger.png) | ![illustration for Swagger](../../simpleicons/S/Swagger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwaggerXs>`
- `<$SwaggerSm>`
- `<$SwaggerMd>`
- `<$SwaggerLg>`





## Swagger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Swagger
include('simpleicons/S/Swagger')

' renders the element
Swagger('Swagger', 'Swagger', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Swagger
include('simpleicons/S/Swagger')

' renders the element
Swagger('Swagger', 'Swagger', 'an optional tech label', 'an optional description')
@enduml
```

