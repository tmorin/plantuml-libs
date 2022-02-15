# Cmake


```text
simpleicons-6/C/Cmake
```

```text
include('simpleicons-6/C/Cmake')
```



| Illustration | Cmake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cmake.png) | ![illustration for Cmake](../../simpleicons-6/C/Cmake.Local.png) |




## Cmake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cmake
include('simpleicons-6/C/Cmake')

' renders the element
Cmake('Cmake', 'Cmake', 'an optional tech label')
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

' loads the Item which embeds the element Cmake
include('simpleicons-6/C/Cmake')

' renders the element
Cmake('Cmake', 'Cmake', 'an optional tech label')
@enduml
```

