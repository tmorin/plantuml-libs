# Artixlinux


```text
simpleicons-7/A/Artixlinux
```

```text
include('simpleicons-7/A/Artixlinux')
```



| Illustration | Artixlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Artixlinux.png) | ![illustration for Artixlinux](../../simpleicons-7/A/Artixlinux.Local.png) |




## Artixlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Artixlinux
include('simpleicons-7/A/Artixlinux')

' renders the element
Artixlinux('Artixlinux', 'Artixlinux', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Artixlinux
include('simpleicons-7/A/Artixlinux')

' renders the element
Artixlinux('Artixlinux', 'Artixlinux', 'an optional tech label', 'an optional description')
@enduml
```

