# Odido


```text
simpleicons-14/O/Odido
```

```text
include('simpleicons-14/O/Odido')
```



| Illustration | Odido |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Odido.png) | ![illustration for Odido](../../simpleicons-14/O/Odido.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OdidoXs>`
- `<$OdidoSm>`
- `<$OdidoMd>`
- `<$OdidoLg>`





## Odido

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Odido
include('simpleicons-14/O/Odido')

' renders the element
Odido('Odido', 'Odido', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Odido
include('simpleicons-14/O/Odido')

' renders the element
Odido('Odido', 'Odido', 'an optional tech label', 'an optional description')
@enduml
```

