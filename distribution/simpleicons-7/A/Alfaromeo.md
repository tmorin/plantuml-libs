# Alfaromeo


```text
simpleicons-7/A/Alfaromeo
```

```text
include('simpleicons-7/A/Alfaromeo')
```



| Illustration | Alfaromeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Alfaromeo.png) | ![illustration for Alfaromeo](../../simpleicons-7/A/Alfaromeo.Local.png) |




## Alfaromeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alfaromeo
include('simpleicons-7/A/Alfaromeo')

' renders the element
Alfaromeo('Alfaromeo', 'Alfaromeo', 'an optional tech label')
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

' loads the Item which embeds the element Alfaromeo
include('simpleicons-7/A/Alfaromeo')

' renders the element
Alfaromeo('Alfaromeo', 'Alfaromeo', 'an optional tech label')
@enduml
```

