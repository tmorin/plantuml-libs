# Cycling74


```text
simpleicons-8/C/Cycling74
```

```text
include('simpleicons-8/C/Cycling74')
```



| Illustration | Cycling74 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cycling74.png) | ![illustration for Cycling74](../../simpleicons-8/C/Cycling74.Local.png) |




## Cycling74

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cycling74
include('simpleicons-8/C/Cycling74')

' renders the element
Cycling74('Cycling74', 'Cycling74', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cycling74
include('simpleicons-8/C/Cycling74')

' renders the element
Cycling74('Cycling74', 'Cycling74', 'an optional tech label', 'an optional description')
@enduml
```

