# Keycloak


```text
simpleicons-14/K/Keycloak
```

```text
include('simpleicons-14/K/Keycloak')
```



| Illustration | Keycloak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Keycloak.png) | ![illustration for Keycloak](../../simpleicons-14/K/Keycloak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeycloakXs>`
- `<$KeycloakSm>`
- `<$KeycloakMd>`
- `<$KeycloakLg>`





## Keycloak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Keycloak
include('simpleicons-14/K/Keycloak')

' renders the element
Keycloak('Keycloak', 'Keycloak', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keycloak
include('simpleicons-14/K/Keycloak')

' renders the element
Keycloak('Keycloak', 'Keycloak', 'an optional tech label', 'an optional description')
@enduml
```

