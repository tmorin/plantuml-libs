# Backendless


```text
simpleicons/B/Backendless
```

```text
include('simpleicons/B/Backendless')
```



| Illustration | Backendless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Backendless.png) | ![illustration for Backendless](../../simpleicons/B/Backendless.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Backendless
include('simpleicons/B/Backendless')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Backendless
include('simpleicons/B/Backendless')

' renders the element
Backendless('Backendless', 'Backendless', 'an optional tech label', 'an optional description')
@enduml
```

