# Octanerender


```text
simpleicons-7/O/Octanerender
```

```text
include('simpleicons-7/O/Octanerender')
```



| Illustration | Octanerender |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Octanerender.png) | ![illustration for Octanerender](../../simpleicons-7/O/Octanerender.Local.png) |




## Octanerender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Octanerender
include('simpleicons-7/O/Octanerender')

' renders the element
Octanerender('Octanerender', 'Octanerender', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Octanerender
include('simpleicons-7/O/Octanerender')

' renders the element
Octanerender('Octanerender', 'Octanerender', 'an optional tech label', 'an optional description')
@enduml
```

