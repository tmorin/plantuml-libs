# Dynatrace


```text
simpleicons-7/D/Dynatrace
```

```text
include('simpleicons-7/D/Dynatrace')
```



| Illustration | Dynatrace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dynatrace.png) | ![illustration for Dynatrace](../../simpleicons-7/D/Dynatrace.Local.png) |




## Dynatrace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dynatrace
include('simpleicons-7/D/Dynatrace')

' renders the element
Dynatrace('Dynatrace', 'Dynatrace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dynatrace
include('simpleicons-7/D/Dynatrace')

' renders the element
Dynatrace('Dynatrace', 'Dynatrace', 'an optional tech label', 'an optional description')
@enduml
```

