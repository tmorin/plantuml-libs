# Lada


```text
simpleicons-8/L/Lada
```

```text
include('simpleicons-8/L/Lada')
```



| Illustration | Lada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Lada.png) | ![illustration for Lada](../../simpleicons-8/L/Lada.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LadaXs>`
- `<$LadaSm>`
- `<$LadaMd>`
- `<$LadaLg>`





## Lada

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lada
include('simpleicons-8/L/Lada')

' renders the element
Lada('Lada', 'Lada', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lada
include('simpleicons-8/L/Lada')

' renders the element
Lada('Lada', 'Lada', 'an optional tech label', 'an optional description')
@enduml
```

