# Scipy


```text
simpleicons-5/S/Scipy
```

```text
include('simpleicons-5/S/Scipy')
```



| Illustration | Scipy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scipy.png) | ![illustration for Scipy](../../simpleicons-5/S/Scipy.Local.png) |




## Scipy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scipy
include('simpleicons-5/S/Scipy')

' renders the element
Scipy('Scipy', 'Scipy', 'an optional tech label')
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

' loads the Item which embeds the element Scipy
include('simpleicons-5/S/Scipy')

' renders the element
Scipy('Scipy', 'Scipy', 'an optional tech label')
@enduml
```

