# Lifx


```text
simpleicons-14/L/Lifx
```

```text
include('simpleicons-14/L/Lifx')
```



| Illustration | Lifx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lifx.png) | ![illustration for Lifx](../../simpleicons-14/L/Lifx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LifxXs>`
- `<$LifxSm>`
- `<$LifxMd>`
- `<$LifxLg>`





## Lifx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lifx
include('simpleicons-14/L/Lifx')

' renders the element
Lifx('Lifx', 'Lifx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lifx
include('simpleicons-14/L/Lifx')

' renders the element
Lifx('Lifx', 'Lifx', 'an optional tech label', 'an optional description')
@enduml
```

