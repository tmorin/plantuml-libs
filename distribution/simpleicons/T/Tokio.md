# Tokio


```text
simpleicons/T/Tokio
```

```text
include('simpleicons/T/Tokio')
```



| Illustration | Tokio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tokio.png) | ![illustration for Tokio](../../simpleicons/T/Tokio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TokioXs>`
- `<$TokioSm>`
- `<$TokioMd>`
- `<$TokioLg>`





## Tokio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tokio
include('simpleicons/T/Tokio')

' renders the element
Tokio('Tokio', 'Tokio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tokio
include('simpleicons/T/Tokio')

' renders the element
Tokio('Tokio', 'Tokio', 'an optional tech label', 'an optional description')
@enduml
```

