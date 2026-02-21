# Weasyl


```text
simpleicons/W/Weasyl
```

```text
include('simpleicons/W/Weasyl')
```



| Illustration | Weasyl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Weasyl.png) | ![illustration for Weasyl](../../simpleicons/W/Weasyl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WeasylXs>`
- `<$WeasylSm>`
- `<$WeasylMd>`
- `<$WeasylLg>`





## Weasyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Weasyl
include('simpleicons/W/Weasyl')

' renders the element
Weasyl('Weasyl', 'Weasyl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Weasyl
include('simpleicons/W/Weasyl')

' renders the element
Weasyl('Weasyl', 'Weasyl', 'an optional tech label', 'an optional description')
@enduml
```

