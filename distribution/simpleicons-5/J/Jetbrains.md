# Jetbrains


```text
simpleicons-5/J/Jetbrains
```

```text
include('simpleicons-5/J/Jetbrains')
```



| Illustration | Jetbrains |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jetbrains.png) | ![illustration for Jetbrains](../../simpleicons-5/J/Jetbrains.Local.png) |




## Jetbrains

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jetbrains
include('simpleicons-5/J/Jetbrains')

' renders the element
Jetbrains('Jetbrains', 'Jetbrains', 'an optional tech label')
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

' loads the Item which embeds the element Jetbrains
include('simpleicons-5/J/Jetbrains')

' renders the element
Jetbrains('Jetbrains', 'Jetbrains', 'an optional tech label')
@enduml
```

