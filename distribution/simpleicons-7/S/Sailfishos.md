# Sailfishos


```text
simpleicons-7/S/Sailfishos
```

```text
include('simpleicons-7/S/Sailfishos')
```



| Illustration | Sailfishos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sailfishos.png) | ![illustration for Sailfishos](../../simpleicons-7/S/Sailfishos.Local.png) |




## Sailfishos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sailfishos
include('simpleicons-7/S/Sailfishos')

' renders the element
Sailfishos('Sailfishos', 'Sailfishos', 'an optional tech label')
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

' loads the Item which embeds the element Sailfishos
include('simpleicons-7/S/Sailfishos')

' renders the element
Sailfishos('Sailfishos', 'Sailfishos', 'an optional tech label')
@enduml
```

