# Thumbtack


```text
simpleicons-7/T/Thumbtack
```

```text
include('simpleicons-7/T/Thumbtack')
```



| Illustration | Thumbtack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Thumbtack.png) | ![illustration for Thumbtack](../../simpleicons-7/T/Thumbtack.Local.png) |




## Thumbtack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Thumbtack
include('simpleicons-7/T/Thumbtack')

' renders the element
Thumbtack('Thumbtack', 'Thumbtack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thumbtack
include('simpleicons-7/T/Thumbtack')

' renders the element
Thumbtack('Thumbtack', 'Thumbtack', 'an optional tech label', 'an optional description')
@enduml
```

