# Dapr


```text
simpleicons-14/D/Dapr
```

```text
include('simpleicons-14/D/Dapr')
```



| Illustration | Dapr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dapr.png) | ![illustration for Dapr](../../simpleicons-14/D/Dapr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DaprXs>`
- `<$DaprSm>`
- `<$DaprMd>`
- `<$DaprLg>`





## Dapr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dapr
include('simpleicons-14/D/Dapr')

' renders the element
Dapr('Dapr', 'Dapr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dapr
include('simpleicons-14/D/Dapr')

' renders the element
Dapr('Dapr', 'Dapr', 'an optional tech label', 'an optional description')
@enduml
```

