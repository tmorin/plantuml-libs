# Uikit


```text
simpleicons/U/Uikit
```

```text
include('simpleicons/U/Uikit')
```



| Illustration | Uikit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uikit.png) | ![illustration for Uikit](../../simpleicons/U/Uikit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UikitXs>`
- `<$UikitSm>`
- `<$UikitMd>`
- `<$UikitLg>`





## Uikit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uikit
include('simpleicons/U/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uikit
include('simpleicons/U/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label', 'an optional description')
@enduml
```

