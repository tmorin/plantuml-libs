# Venmo


```text
simpleicons-6/V/Venmo
```

```text
include('simpleicons-6/V/Venmo')
```



| Illustration | Venmo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Venmo.png) | ![illustration for Venmo](../../simpleicons-6/V/Venmo.Local.png) |




## Venmo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Venmo
include('simpleicons-6/V/Venmo')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Venmo
include('simpleicons-6/V/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label')
@enduml
```

