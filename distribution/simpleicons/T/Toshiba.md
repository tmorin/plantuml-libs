# Toshiba


```text
simpleicons/T/Toshiba
```

```text
include('simpleicons/T/Toshiba')
```



| Illustration | Toshiba |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Toshiba.png) | ![illustration for Toshiba](../../simpleicons/T/Toshiba.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToshibaXs>`
- `<$ToshibaSm>`
- `<$ToshibaMd>`
- `<$ToshibaLg>`





## Toshiba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Toshiba
include('simpleicons/T/Toshiba')

' renders the element
Toshiba('Toshiba', 'Toshiba', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toshiba
include('simpleicons/T/Toshiba')

' renders the element
Toshiba('Toshiba', 'Toshiba', 'an optional tech label', 'an optional description')
@enduml
```

