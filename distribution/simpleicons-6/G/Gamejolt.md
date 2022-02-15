# Gamejolt


```text
simpleicons-6/G/Gamejolt
```

```text
include('simpleicons-6/G/Gamejolt')
```



| Illustration | Gamejolt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gamejolt.png) | ![illustration for Gamejolt](../../simpleicons-6/G/Gamejolt.Local.png) |




## Gamejolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gamejolt
include('simpleicons-6/G/Gamejolt')

' renders the element
Gamejolt('Gamejolt', 'Gamejolt', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gamejolt
include('simpleicons-6/G/Gamejolt')

' renders the element
Gamejolt('Gamejolt', 'Gamejolt', 'an optional tech label')
@enduml
```

