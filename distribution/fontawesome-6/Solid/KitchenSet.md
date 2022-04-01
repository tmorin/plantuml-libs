# KitchenSet


```text
fontawesome-6/Solid/KitchenSet
```

```text
include('fontawesome-6/Solid/KitchenSet')
```



| Illustration | KitchenSet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/KitchenSet.png) | ![illustration for KitchenSet](../../fontawesome-6/Solid/KitchenSet.Local.png) |




## KitchenSet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element KitchenSet
include('fontawesome-6/Solid/KitchenSet')

' renders the element
KitchenSet('KitchenSet', 'Kitchen Set', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element KitchenSet
include('fontawesome-6/Solid/KitchenSet')

' renders the element
KitchenSet('KitchenSet', 'Kitchen Set', 'an optional tech label')
@enduml
```

