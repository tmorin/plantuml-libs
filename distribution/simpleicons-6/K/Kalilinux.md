# Kalilinux


```text
simpleicons-6/K/Kalilinux
```

```text
include('simpleicons-6/K/Kalilinux')
```



| Illustration | Kalilinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kalilinux.png) | ![illustration for Kalilinux](../../simpleicons-6/K/Kalilinux.Local.png) |




## Kalilinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kalilinux
include('simpleicons-6/K/Kalilinux')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kalilinux
include('simpleicons-6/K/Kalilinux')

' renders the element
Kalilinux('Kalilinux', 'Kalilinux', 'an optional tech label')
@enduml
```

