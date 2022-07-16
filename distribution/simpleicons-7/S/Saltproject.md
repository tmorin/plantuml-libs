# Saltproject


```text
simpleicons-7/S/Saltproject
```

```text
include('simpleicons-7/S/Saltproject')
```



| Illustration | Saltproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Saltproject.png) | ![illustration for Saltproject](../../simpleicons-7/S/Saltproject.Local.png) |




## Saltproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Saltproject
include('simpleicons-7/S/Saltproject')

' renders the element
Saltproject('Saltproject', 'Saltproject', 'an optional tech label')
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

' loads the Item which embeds the element Saltproject
include('simpleicons-7/S/Saltproject')

' renders the element
Saltproject('Saltproject', 'Saltproject', 'an optional tech label')
@enduml
```

