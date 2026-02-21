# Easyeda


```text
simpleicons-14/E/Easyeda
```

```text
include('simpleicons-14/E/Easyeda')
```



| Illustration | Easyeda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Easyeda.png) | ![illustration for Easyeda](../../simpleicons-14/E/Easyeda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EasyedaXs>`
- `<$EasyedaSm>`
- `<$EasyedaMd>`
- `<$EasyedaLg>`





## Easyeda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Easyeda
include('simpleicons-14/E/Easyeda')

' renders the element
Easyeda('Easyeda', 'Easyeda', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Easyeda
include('simpleicons-14/E/Easyeda')

' renders the element
Easyeda('Easyeda', 'Easyeda', 'an optional tech label', 'an optional description')
@enduml
```

