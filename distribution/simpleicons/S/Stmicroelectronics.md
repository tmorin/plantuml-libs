# Stmicroelectronics


```text
simpleicons/S/Stmicroelectronics
```

```text
include('simpleicons/S/Stmicroelectronics')
```



| Illustration | Stmicroelectronics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Stmicroelectronics.png) | ![illustration for Stmicroelectronics](../../simpleicons/S/Stmicroelectronics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StmicroelectronicsXs>`
- `<$StmicroelectronicsSm>`
- `<$StmicroelectronicsMd>`
- `<$StmicroelectronicsLg>`





## Stmicroelectronics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stmicroelectronics
include('simpleicons/S/Stmicroelectronics')

' renders the element
Stmicroelectronics('Stmicroelectronics', 'Stmicroelectronics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stmicroelectronics
include('simpleicons/S/Stmicroelectronics')

' renders the element
Stmicroelectronics('Stmicroelectronics', 'Stmicroelectronics', 'an optional tech label', 'an optional description')
@enduml
```

