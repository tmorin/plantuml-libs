# Sui


```text
simpleicons-14/S/Sui
```

```text
include('simpleicons-14/S/Sui')
```



| Illustration | Sui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sui.png) | ![illustration for Sui](../../simpleicons-14/S/Sui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuiXs>`
- `<$SuiSm>`
- `<$SuiMd>`
- `<$SuiLg>`





## Sui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sui
include('simpleicons-14/S/Sui')

' renders the element
Sui('Sui', 'Sui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sui
include('simpleicons-14/S/Sui')

' renders the element
Sui('Sui', 'Sui', 'an optional tech label', 'an optional description')
@enduml
```

