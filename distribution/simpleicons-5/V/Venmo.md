# Venmo


```text
simpleicons-5/V/Venmo
```

```text
include('simpleicons-5/V/Venmo')
```



| Illustration | Venmo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Venmo.png) | ![illustration for Venmo](../../simpleicons-5/V/Venmo.Local.png) |




## Venmo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Venmo
include('simpleicons-5/V/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label')
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

' loads the Item which embeds the element Venmo
include('simpleicons-5/V/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label')
@enduml
```

