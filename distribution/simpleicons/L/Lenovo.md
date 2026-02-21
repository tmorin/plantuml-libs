# Lenovo


```text
simpleicons/L/Lenovo
```

```text
include('simpleicons/L/Lenovo')
```



| Illustration | Lenovo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lenovo.png) | ![illustration for Lenovo](../../simpleicons/L/Lenovo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LenovoXs>`
- `<$LenovoSm>`
- `<$LenovoMd>`
- `<$LenovoLg>`





## Lenovo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lenovo
include('simpleicons/L/Lenovo')

' renders the element
Lenovo('Lenovo', 'Lenovo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lenovo
include('simpleicons/L/Lenovo')

' renders the element
Lenovo('Lenovo', 'Lenovo', 'an optional tech label', 'an optional description')
@enduml
```

