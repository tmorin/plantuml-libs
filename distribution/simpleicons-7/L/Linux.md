# Linux


```text
simpleicons-7/L/Linux
```

```text
include('simpleicons-7/L/Linux')
```



| Illustration | Linux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Linux.png) | ![illustration for Linux](../../simpleicons-7/L/Linux.Local.png) |




## Linux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linux
include('simpleicons-7/L/Linux')

' renders the element
Linux('Linux', 'Linux', 'an optional tech label')
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

' loads the Item which embeds the element Linux
include('simpleicons-7/L/Linux')

' renders the element
Linux('Linux', 'Linux', 'an optional tech label')
@enduml
```

