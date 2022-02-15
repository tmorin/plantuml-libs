# Unacademy


```text
simpleicons-6/U/Unacademy
```

```text
include('simpleicons-6/U/Unacademy')
```



| Illustration | Unacademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Unacademy.png) | ![illustration for Unacademy](../../simpleicons-6/U/Unacademy.Local.png) |




## Unacademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Unacademy
include('simpleicons-6/U/Unacademy')

' renders the element
Unacademy('Unacademy', 'Unacademy', 'an optional tech label')
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

' loads the Item which embeds the element Unacademy
include('simpleicons-6/U/Unacademy')

' renders the element
Unacademy('Unacademy', 'Unacademy', 'an optional tech label')
@enduml
```

