# Dynatrace


```text
simpleicons-6/D/Dynatrace
```

```text
include('simpleicons-6/D/Dynatrace')
```



| Illustration | Dynatrace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dynatrace.png) | ![illustration for Dynatrace](../../simpleicons-6/D/Dynatrace.Local.png) |




## Dynatrace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dynatrace
include('simpleicons-6/D/Dynatrace')

' renders the element
Dynatrace('Dynatrace', 'Dynatrace', 'an optional tech label')
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

' loads the Item which embeds the element Dynatrace
include('simpleicons-6/D/Dynatrace')

' renders the element
Dynatrace('Dynatrace', 'Dynatrace', 'an optional tech label')
@enduml
```

