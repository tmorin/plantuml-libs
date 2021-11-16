# Tether


```text
simpleicons-5/T/Tether
```

```text
include('simpleicons-5/T/Tether')
```



| Illustration | Tether |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tether.png) | ![illustration for Tether](../../simpleicons-5/T/Tether.Local.png) |




## Tether

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tether
include('simpleicons-5/T/Tether')

' renders the element
Tether('Tether', 'Tether', 'an optional tech label')
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

' loads the Item which embeds the element Tether
include('simpleicons-5/T/Tether')

' renders the element
Tether('Tether', 'Tether', 'an optional tech label')
@enduml
```

