# Weasyl


```text
simpleicons-7/W/Weasyl
```

```text
include('simpleicons-7/W/Weasyl')
```



| Illustration | Weasyl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Weasyl.png) | ![illustration for Weasyl](../../simpleicons-7/W/Weasyl.Local.png) |




## Weasyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Weasyl
include('simpleicons-7/W/Weasyl')

' renders the element
Weasyl('Weasyl', 'Weasyl', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Weasyl
include('simpleicons-7/W/Weasyl')

' renders the element
Weasyl('Weasyl', 'Weasyl', 'an optional tech label')
@enduml
```

