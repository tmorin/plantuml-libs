# Wiiu


```text
simpleicons-5/W/Wiiu
```

```text
include('simpleicons-5/W/Wiiu')
```



| Illustration | Wiiu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wiiu.png) | ![illustration for Wiiu](../../simpleicons-5/W/Wiiu.Local.png) |




## Wiiu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wiiu
include('simpleicons-5/W/Wiiu')

' renders the element
Wiiu('Wiiu', 'Wiiu', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wiiu
include('simpleicons-5/W/Wiiu')

' renders the element
Wiiu('Wiiu', 'Wiiu', 'an optional tech label')
@enduml
```

