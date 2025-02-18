# Powerfx


```text
simpleicons-14/P/Powerfx
```

```text
include('simpleicons-14/P/Powerfx')
```



| Illustration | Powerfx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Powerfx.png) | ![illustration for Powerfx](../../simpleicons-14/P/Powerfx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerfxXs>`
- `<$PowerfxSm>`
- `<$PowerfxMd>`
- `<$PowerfxLg>`





## Powerfx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Powerfx
include('simpleicons-14/P/Powerfx')

' renders the element
Powerfx('Powerfx', 'Powerfx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerfx
include('simpleicons-14/P/Powerfx')

' renders the element
Powerfx('Powerfx', 'Powerfx', 'an optional tech label', 'an optional description')
@enduml
```

