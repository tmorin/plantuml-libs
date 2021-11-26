# Codecademy


```text
simpleicons-5/C/Codecademy
```

```text
include('simpleicons-5/C/Codecademy')
```



| Illustration | Codecademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codecademy.png) | ![illustration for Codecademy](../../simpleicons-5/C/Codecademy.Local.png) |




## Codecademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codecademy
include('simpleicons-5/C/Codecademy')

' renders the element
Codecademy('Codecademy', 'Codecademy', 'an optional tech label')
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

' loads the Item which embeds the element Codecademy
include('simpleicons-5/C/Codecademy')

' renders the element
Codecademy('Codecademy', 'Codecademy', 'an optional tech label')
@enduml
```

