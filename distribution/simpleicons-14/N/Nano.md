# Nano


```text
simpleicons-14/N/Nano
```

```text
include('simpleicons-14/N/Nano')
```



| Illustration | Nano |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nano.png) | ![illustration for Nano](../../simpleicons-14/N/Nano.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NanoXs>`
- `<$NanoSm>`
- `<$NanoMd>`
- `<$NanoLg>`





## Nano

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nano
include('simpleicons-14/N/Nano')

' renders the element
Nano('Nano', 'Nano', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nano
include('simpleicons-14/N/Nano')

' renders the element
Nano('Nano', 'Nano', 'an optional tech label', 'an optional description')
@enduml
```

