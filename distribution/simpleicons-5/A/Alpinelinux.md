# Alpinelinux


```text
simpleicons-5/A/Alpinelinux
```

```text
include('simpleicons-5/A/Alpinelinux')
```



| Illustration | Alpinelinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Alpinelinux.png) | ![illustration for Alpinelinux](../../simpleicons-5/A/Alpinelinux.Local.png) |




## Alpinelinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Alpinelinux
include('simpleicons-5/A/Alpinelinux')

' renders the element
Alpinelinux('Alpinelinux', 'Alpinelinux', 'an optional tech label')
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

' loads the Item which embeds the element Alpinelinux
include('simpleicons-5/A/Alpinelinux')

' renders the element
Alpinelinux('Alpinelinux', 'Alpinelinux', 'an optional tech label')
@enduml
```

