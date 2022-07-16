# Simpleanalytics


```text
simpleicons-7/S/Simpleanalytics
```

```text
include('simpleicons-7/S/Simpleanalytics')
```



| Illustration | Simpleanalytics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Simpleanalytics.png) | ![illustration for Simpleanalytics](../../simpleicons-7/S/Simpleanalytics.Local.png) |




## Simpleanalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Simpleanalytics
include('simpleicons-7/S/Simpleanalytics')

' renders the element
Simpleanalytics('Simpleanalytics', 'Simpleanalytics', 'an optional tech label')
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

' loads the Item which embeds the element Simpleanalytics
include('simpleicons-7/S/Simpleanalytics')

' renders the element
Simpleanalytics('Simpleanalytics', 'Simpleanalytics', 'an optional tech label')
@enduml
```

