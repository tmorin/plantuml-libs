# Cycling74


```text
simpleicons-5/C/Cycling74
```

```text
include('simpleicons-5/C/Cycling74')
```



| Illustration | Cycling74 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cycling74.png) | ![illustration for Cycling74](../../simpleicons-5/C/Cycling74.Local.png) |




## Cycling74

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cycling74
include('simpleicons-5/C/Cycling74')

' renders the element
Cycling74('Cycling74', 'Cycling74', 'an optional tech label')
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

' loads the Item which embeds the element Cycling74
include('simpleicons-5/C/Cycling74')

' renders the element
Cycling74('Cycling74', 'Cycling74', 'an optional tech label')
@enduml
```

