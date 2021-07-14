# Artixlinux


```text
simpleicons-5/A/Artixlinux
```

```text
include('simpleicons-5/A/Artixlinux')
```



| Illustration | Artixlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Artixlinux.png) | ![illustration for Artixlinux](../../simpleicons-5/A/Artixlinux.Local.png) |




## Artixlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Artixlinux
include('simpleicons-5/A/Artixlinux')

' renders the element
Artixlinux('Artixlinux', 'Artixlinux', 'an optional tech label')
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

' loads the Item which embeds the element Artixlinux
include('simpleicons-5/A/Artixlinux')

' renders the element
Artixlinux('Artixlinux', 'Artixlinux', 'an optional tech label')
@enduml
```

