# Archlinux


```text
simpleicons-5/A/Archlinux
```

```text
include('simpleicons-5/A/Archlinux')
```



| Illustration | Archlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Archlinux.png) | ![illustration for Archlinux](../../simpleicons-5/A/Archlinux.Local.png) |




## Archlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Archlinux
include('simpleicons-5/A/Archlinux')

' renders the element
Archlinux('Archlinux', 'Archlinux', 'an optional tech label')
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

' loads the Item which embeds the element Archlinux
include('simpleicons-5/A/Archlinux')

' renders the element
Archlinux('Archlinux', 'Archlinux', 'an optional tech label')
@enduml
```

