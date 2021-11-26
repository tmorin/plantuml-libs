# Macos


```text
simpleicons-5/M/Macos
```

```text
include('simpleicons-5/M/Macos')
```



| Illustration | Macos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Macos.png) | ![illustration for Macos](../../simpleicons-5/M/Macos.Local.png) |




## Macos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Macos
include('simpleicons-5/M/Macos')

' renders the element
Macos('Macos', 'Macos', 'an optional tech label')
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

' loads the Item which embeds the element Macos
include('simpleicons-5/M/Macos')

' renders the element
Macos('Macos', 'Macos', 'an optional tech label')
@enduml
```

