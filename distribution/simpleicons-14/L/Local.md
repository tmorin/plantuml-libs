# Local


```text
simpleicons-14/L/Local
```

```text
include('simpleicons-14/L/Local')
```



| Illustration | Local |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Local.png) | ![illustration for Local](../../simpleicons-14/L/Local.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalXs>`
- `<$LocalSm>`
- `<$LocalMd>`
- `<$LocalLg>`





## Local

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Local
include('simpleicons-14/L/Local')

' renders the element
Local('Local', 'Local', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Local
include('simpleicons-14/L/Local')

' renders the element
Local('Local', 'Local', 'an optional tech label', 'an optional description')
@enduml
```

