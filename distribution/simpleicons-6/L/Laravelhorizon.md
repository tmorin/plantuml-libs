# Laravelhorizon


```text
simpleicons-6/L/Laravelhorizon
```

```text
include('simpleicons-6/L/Laravelhorizon')
```



| Illustration | Laravelhorizon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Laravelhorizon.png) | ![illustration for Laravelhorizon](../../simpleicons-6/L/Laravelhorizon.Local.png) |




## Laravelhorizon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Laravelhorizon
include('simpleicons-6/L/Laravelhorizon')

' renders the element
Laravelhorizon('Laravelhorizon', 'Laravelhorizon', 'an optional tech label')
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

' loads the Item which embeds the element Laravelhorizon
include('simpleicons-6/L/Laravelhorizon')

' renders the element
Laravelhorizon('Laravelhorizon', 'Laravelhorizon', 'an optional tech label')
@enduml
```

