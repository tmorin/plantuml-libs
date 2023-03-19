# Sahibinden


```text
simpleicons-8/S/Sahibinden
```

```text
include('simpleicons-8/S/Sahibinden')
```



| Illustration | Sahibinden |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sahibinden.png) | ![illustration for Sahibinden](../../simpleicons-8/S/Sahibinden.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SahibindenXs>`
- `<$SahibindenSm>`
- `<$SahibindenMd>`
- `<$SahibindenLg>`





## Sahibinden

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sahibinden
include('simpleicons-8/S/Sahibinden')

' renders the element
Sahibinden('Sahibinden', 'Sahibinden', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sahibinden
include('simpleicons-8/S/Sahibinden')

' renders the element
Sahibinden('Sahibinden', 'Sahibinden', 'an optional tech label', 'an optional description')
@enduml
```

