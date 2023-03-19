# Backendless


```text
simpleicons-8/B/Backendless
```

```text
include('simpleicons-8/B/Backendless')
```



| Illustration | Backendless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Backendless.png) | ![illustration for Backendless](../../simpleicons-8/B/Backendless.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackendlessXs>`
- `<$BackendlessSm>`
- `<$BackendlessMd>`
- `<$BackendlessLg>`





## Backendless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Backendless
include('simpleicons-8/B/Backendless')

' renders the element
Backendless('Backendless', 'Backendless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backendless
include('simpleicons-8/B/Backendless')

' renders the element
Backendless('Backendless', 'Backendless', 'an optional tech label', 'an optional description')
@enduml
```

