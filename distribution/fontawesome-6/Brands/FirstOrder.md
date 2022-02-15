# FirstOrder


```text
fontawesome-6/Brands/FirstOrder
```

```text
include('fontawesome-6/Brands/FirstOrder')
```



| Illustration | FirstOrder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FirstOrder.png) | ![illustration for FirstOrder](../../fontawesome-6/Brands/FirstOrder.Local.png) |




## FirstOrder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FirstOrder
include('fontawesome-6/Brands/FirstOrder')

' renders the element
FirstOrder('FirstOrder', 'First Order', 'an optional tech label')
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

' loads the Item which embeds the element FirstOrder
include('fontawesome-6/Brands/FirstOrder')

' renders the element
FirstOrder('FirstOrder', 'First Order', 'an optional tech label')
@enduml
```

