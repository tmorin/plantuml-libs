# Deliveroo


```text
simpleicons-7/D/Deliveroo
```

```text
include('simpleicons-7/D/Deliveroo')
```



| Illustration | Deliveroo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Deliveroo.png) | ![illustration for Deliveroo](../../simpleicons-7/D/Deliveroo.Local.png) |




## Deliveroo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Deliveroo
include('simpleicons-7/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label')
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

' loads the Item which embeds the element Deliveroo
include('simpleicons-7/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label')
@enduml
```

