# Grav


```text
simpleicons-5/G/Grav
```

```text
include('simpleicons-5/G/Grav')
```



| Illustration | Grav |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Grav.png) | ![illustration for Grav](../../simpleicons-5/G/Grav.Local.png) |




## Grav

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Grav
include('simpleicons-5/G/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label')
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

' loads the Item which embeds the element Grav
include('simpleicons-5/G/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label')
@enduml
```

