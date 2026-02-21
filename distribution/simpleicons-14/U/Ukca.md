# Ukca


```text
simpleicons-14/U/Ukca
```

```text
include('simpleicons-14/U/Ukca')
```



| Illustration | Ukca |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Ukca.png) | ![illustration for Ukca](../../simpleicons-14/U/Ukca.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UkcaXs>`
- `<$UkcaSm>`
- `<$UkcaMd>`
- `<$UkcaLg>`





## Ukca

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ukca
include('simpleicons-14/U/Ukca')

' renders the element
Ukca('Ukca', 'Ukca', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ukca
include('simpleicons-14/U/Ukca')

' renders the element
Ukca('Ukca', 'Ukca', 'an optional tech label', 'an optional description')
@enduml
```

