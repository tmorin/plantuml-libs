# Venmo


```text
simpleicons-7/V/Venmo
```

```text
include('simpleicons-7/V/Venmo')
```



| Illustration | Venmo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Venmo.png) | ![illustration for Venmo](../../simpleicons-7/V/Venmo.Local.png) |




## Venmo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Venmo
include('simpleicons-7/V/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Venmo
include('simpleicons-7/V/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label', 'an optional description')
@enduml
```

