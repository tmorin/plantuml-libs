# Sncf


```text
simpleicons-8/S/Sncf
```

```text
include('simpleicons-8/S/Sncf')
```



| Illustration | Sncf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sncf.png) | ![illustration for Sncf](../../simpleicons-8/S/Sncf.Local.png) |




## Sncf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sncf
include('simpleicons-8/S/Sncf')

' renders the element
Sncf('Sncf', 'Sncf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sncf
include('simpleicons-8/S/Sncf')

' renders the element
Sncf('Sncf', 'Sncf', 'an optional tech label', 'an optional description')
@enduml
```

