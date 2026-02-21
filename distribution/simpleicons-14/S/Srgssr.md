# Srgssr


```text
simpleicons-14/S/Srgssr
```

```text
include('simpleicons-14/S/Srgssr')
```



| Illustration | Srgssr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Srgssr.png) | ![illustration for Srgssr](../../simpleicons-14/S/Srgssr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SrgssrXs>`
- `<$SrgssrSm>`
- `<$SrgssrMd>`
- `<$SrgssrLg>`





## Srgssr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Srgssr
include('simpleicons-14/S/Srgssr')

' renders the element
Srgssr('Srgssr', 'Srgssr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Srgssr
include('simpleicons-14/S/Srgssr')

' renders the element
Srgssr('Srgssr', 'Srgssr', 'an optional tech label', 'an optional description')
@enduml
```

