# Quarkus


```text
simpleicons-14/Q/Quarkus
```

```text
include('simpleicons-14/Q/Quarkus')
```



| Illustration | Quarkus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quarkus.png) | ![illustration for Quarkus](../../simpleicons-14/Q/Quarkus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuarkusXs>`
- `<$QuarkusSm>`
- `<$QuarkusMd>`
- `<$QuarkusLg>`





## Quarkus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quarkus
include('simpleicons-14/Q/Quarkus')

' renders the element
Quarkus('Quarkus', 'Quarkus', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quarkus
include('simpleicons-14/Q/Quarkus')

' renders the element
Quarkus('Quarkus', 'Quarkus', 'an optional tech label', 'an optional description')
@enduml
```

