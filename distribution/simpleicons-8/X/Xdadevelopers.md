# Xdadevelopers


```text
simpleicons-8/X/Xdadevelopers
```

```text
include('simpleicons-8/X/Xdadevelopers')
```



| Illustration | Xdadevelopers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/X/Xdadevelopers.png) | ![illustration for Xdadevelopers](../../simpleicons-8/X/Xdadevelopers.Local.png) |




## Xdadevelopers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Xdadevelopers
include('simpleicons-8/X/Xdadevelopers')

' renders the element
Xdadevelopers('Xdadevelopers', 'Xdadevelopers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xdadevelopers
include('simpleicons-8/X/Xdadevelopers')

' renders the element
Xdadevelopers('Xdadevelopers', 'Xdadevelopers', 'an optional tech label', 'an optional description')
@enduml
```

