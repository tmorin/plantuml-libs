# Expressdotcom


```text
simpleicons-14/E/Expressdotcom
```

```text
include('simpleicons-14/E/Expressdotcom')
```



| Illustration | Expressdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Expressdotcom.png) | ![illustration for Expressdotcom](../../simpleicons-14/E/Expressdotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpressdotcomXs>`
- `<$ExpressdotcomSm>`
- `<$ExpressdotcomMd>`
- `<$ExpressdotcomLg>`





## Expressdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Expressdotcom
include('simpleicons-14/E/Expressdotcom')

' renders the element
Expressdotcom('Expressdotcom', 'Expressdotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Expressdotcom
include('simpleicons-14/E/Expressdotcom')

' renders the element
Expressdotcom('Expressdotcom', 'Expressdotcom', 'an optional tech label', 'an optional description')
@enduml
```

