# Grav


```text
simpleicons-6/G/Grav
```

```text
include('simpleicons-6/G/Grav')
```



| Illustration | Grav |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Grav.png) | ![illustration for Grav](../../simpleicons-6/G/Grav.Local.png) |




## Grav

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grav
include('simpleicons-6/G/Grav')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grav
include('simpleicons-6/G/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label')
@enduml
```

