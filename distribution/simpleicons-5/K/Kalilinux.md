# Kalilinux


```text
simpleicons-5/K/Kalilinux
```

```text
include('simpleicons-5/K/Kalilinux')
```



| Illustration | Kalilinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kalilinux.png) | ![illustration for Kalilinux](../../simpleicons-5/K/Kalilinux.Local.png) |




## Kalilinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kalilinux
include('simpleicons-5/K/Kalilinux')

' renders the element
Kalilinux('Kalilinux', 'Kalilinux', 'an optional tech label')
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

' loads the Item which embeds the element Kalilinux
include('simpleicons-5/K/Kalilinux')

' renders the element
Kalilinux('Kalilinux', 'Kalilinux', 'an optional tech label')
@enduml
```

