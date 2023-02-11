# Codecademy


```text
simpleicons-8/C/Codecademy
```

```text
include('simpleicons-8/C/Codecademy')
```



| Illustration | Codecademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Codecademy.png) | ![illustration for Codecademy](../../simpleicons-8/C/Codecademy.Local.png) |




## Codecademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Codecademy
include('simpleicons-8/C/Codecademy')

' renders the element
Codecademy('Codecademy', 'Codecademy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codecademy
include('simpleicons-8/C/Codecademy')

' renders the element
Codecademy('Codecademy', 'Codecademy', 'an optional tech label', 'an optional description')
@enduml
```

