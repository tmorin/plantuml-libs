# Dash0


```text
simpleicons-14/D/Dash0
```

```text
include('simpleicons-14/D/Dash0')
```



| Illustration | Dash0 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dash0.png) | ![illustration for Dash0](../../simpleicons-14/D/Dash0.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Dash0Xs>`
- `<$Dash0Sm>`
- `<$Dash0Md>`
- `<$Dash0Lg>`





## Dash0

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dash0
include('simpleicons-14/D/Dash0')

' renders the element
Dash0('Dash0', 'Dash0', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dash0
include('simpleicons-14/D/Dash0')

' renders the element
Dash0('Dash0', 'Dash0', 'an optional tech label', 'an optional description')
@enduml
```

