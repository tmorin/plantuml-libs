# Htmlacademy


```text
simpleicons-5/H/Htmlacademy
```

```text
include('simpleicons-5/H/Htmlacademy')
```



| Illustration | Htmlacademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Htmlacademy.png) | ![illustration for Htmlacademy](../../simpleicons-5/H/Htmlacademy.Local.png) |




## Htmlacademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Htmlacademy
include('simpleicons-5/H/Htmlacademy')

' renders the element
Htmlacademy('Htmlacademy', 'Htmlacademy', 'an optional tech label')
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

' loads the Item which embeds the element Htmlacademy
include('simpleicons-5/H/Htmlacademy')

' renders the element
Htmlacademy('Htmlacademy', 'Htmlacademy', 'an optional tech label')
@enduml
```

