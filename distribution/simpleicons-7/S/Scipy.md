# Scipy


```text
simpleicons-7/S/Scipy
```

```text
include('simpleicons-7/S/Scipy')
```



| Illustration | Scipy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Scipy.png) | ![illustration for Scipy](../../simpleicons-7/S/Scipy.Local.png) |




## Scipy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Scipy
include('simpleicons-7/S/Scipy')

' renders the element
Scipy('Scipy', 'Scipy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scipy
include('simpleicons-7/S/Scipy')

' renders the element
Scipy('Scipy', 'Scipy', 'an optional tech label', 'an optional description')
@enduml
```

