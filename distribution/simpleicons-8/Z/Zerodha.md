# Zerodha


```text
simpleicons-8/Z/Zerodha
```

```text
include('simpleicons-8/Z/Zerodha')
```



| Illustration | Zerodha |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Z/Zerodha.png) | ![illustration for Zerodha](../../simpleicons-8/Z/Zerodha.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZerodhaXs>`
- `<$ZerodhaSm>`
- `<$ZerodhaMd>`
- `<$ZerodhaLg>`





## Zerodha

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zerodha
include('simpleicons-8/Z/Zerodha')

' renders the element
Zerodha('Zerodha', 'Zerodha', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zerodha
include('simpleicons-8/Z/Zerodha')

' renders the element
Zerodha('Zerodha', 'Zerodha', 'an optional tech label', 'an optional description')
@enduml
```

