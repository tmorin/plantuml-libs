# Udemy


```text
simpleicons-5/U/Udemy
```

```text
include('simpleicons-5/U/Udemy')
```



| Illustration | Udemy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Udemy.png) | ![illustration for Udemy](../../simpleicons-5/U/Udemy.Local.png) |




## Udemy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Udemy
include('simpleicons-5/U/Udemy')

' renders the element
Udemy('Udemy', 'Udemy', 'an optional tech label')
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

' loads the Item which embeds the element Udemy
include('simpleicons-5/U/Udemy')

' renders the element
Udemy('Udemy', 'Udemy', 'an optional tech label')
@enduml
```

