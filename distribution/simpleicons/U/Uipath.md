# Uipath


```text
simpleicons/U/Uipath
```

```text
include('simpleicons/U/Uipath')
```



| Illustration | Uipath |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uipath.png) | ![illustration for Uipath](../../simpleicons/U/Uipath.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UipathXs>`
- `<$UipathSm>`
- `<$UipathMd>`
- `<$UipathLg>`





## Uipath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uipath
include('simpleicons/U/Uipath')

' renders the element
Uipath('Uipath', 'Uipath', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uipath
include('simpleicons/U/Uipath')

' renders the element
Uipath('Uipath', 'Uipath', 'an optional tech label', 'an optional description')
@enduml
```

