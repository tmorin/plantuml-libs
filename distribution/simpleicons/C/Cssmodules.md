# Cssmodules


```text
simpleicons/C/Cssmodules
```

```text
include('simpleicons/C/Cssmodules')
```



| Illustration | Cssmodules |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cssmodules.png) | ![illustration for Cssmodules](../../simpleicons/C/Cssmodules.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CssmodulesXs>`
- `<$CssmodulesSm>`
- `<$CssmodulesMd>`
- `<$CssmodulesLg>`





## Cssmodules

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cssmodules
include('simpleicons/C/Cssmodules')

' renders the element
Cssmodules('Cssmodules', 'Cssmodules', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cssmodules
include('simpleicons/C/Cssmodules')

' renders the element
Cssmodules('Cssmodules', 'Cssmodules', 'an optional tech label', 'an optional description')
@enduml
```

