# Fila


```text
simpleicons/F/Fila
```

```text
include('simpleicons/F/Fila')
```



| Illustration | Fila |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fila.png) | ![illustration for Fila](../../simpleicons/F/Fila.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilaXs>`
- `<$FilaSm>`
- `<$FilaMd>`
- `<$FilaLg>`





## Fila

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fila
include('simpleicons/F/Fila')

' renders the element
Fila('Fila', 'Fila', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fila
include('simpleicons/F/Fila')

' renders the element
Fila('Fila', 'Fila', 'an optional tech label', 'an optional description')
@enduml
```

