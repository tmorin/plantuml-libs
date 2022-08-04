# Schneiderelectric


```text
simpleicons-7/S/Schneiderelectric
```

```text
include('simpleicons-7/S/Schneiderelectric')
```



| Illustration | Schneiderelectric |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Schneiderelectric.png) | ![illustration for Schneiderelectric](../../simpleicons-7/S/Schneiderelectric.Local.png) |




## Schneiderelectric

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Schneiderelectric
include('simpleicons-7/S/Schneiderelectric')

' renders the element
Schneiderelectric('Schneiderelectric', 'Schneiderelectric', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Schneiderelectric
include('simpleicons-7/S/Schneiderelectric')

' renders the element
Schneiderelectric('Schneiderelectric', 'Schneiderelectric', 'an optional tech label', 'an optional description')
@enduml
```

