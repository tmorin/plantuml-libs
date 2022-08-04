# Gamejolt


```text
simpleicons-7/G/Gamejolt
```

```text
include('simpleicons-7/G/Gamejolt')
```



| Illustration | Gamejolt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gamejolt.png) | ![illustration for Gamejolt](../../simpleicons-7/G/Gamejolt.Local.png) |




## Gamejolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gamejolt
include('simpleicons-7/G/Gamejolt')

' renders the element
Gamejolt('Gamejolt', 'Gamejolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamejolt
include('simpleicons-7/G/Gamejolt')

' renders the element
Gamejolt('Gamejolt', 'Gamejolt', 'an optional tech label', 'an optional description')
@enduml
```

