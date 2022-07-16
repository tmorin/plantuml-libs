# Tether


```text
simpleicons-7/T/Tether
```

```text
include('simpleicons-7/T/Tether')
```



| Illustration | Tether |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tether.png) | ![illustration for Tether](../../simpleicons-7/T/Tether.Local.png) |




## Tether

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tether
include('simpleicons-7/T/Tether')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tether
include('simpleicons-7/T/Tether')

' renders the element
Tether('Tether', 'Tether', 'an optional tech label')
@enduml
```

