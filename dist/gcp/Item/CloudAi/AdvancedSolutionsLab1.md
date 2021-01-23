# Advanced Solutions Lab1

```text
gcp/Item/CloudAi/AdvancedSolutionsLab1
```

```text
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
```

|icon|card|element|group|
|---|---|---|---|
|![](AdvancedSolutionsLab1.png)|![](AdvancedSolutionsLab1.card.png)|![](AdvancedSolutionsLab1.element.png)|![](AdvancedSolutionsLab1.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the AdvancedSolutionsLab1 element
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
AdvancedSolutionsLab1Card('advanced_solutions_lab_1', 'Advanced Solutions Lab1', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the AdvancedSolutionsLab1 element
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
AdvancedSolutionsLab1Card('advanced_solutions_lab_1', 'Advanced Solutions Lab1', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the AdvancedSolutionsLab1 element
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
AdvancedSolutionsLab1('advanced_solutions_lab_1', 'Advanced Solutions Lab1', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the AdvancedSolutionsLab1 element
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
AdvancedSolutionsLab1('advanced_solutions_lab_1', 'Advanced Solutions Lab1', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the AdvancedSolutionsLab1 element
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
AdvancedSolutionsLab1Group('advanced_solutions_lab_1', 'Advanced Solutions Lab1', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the AdvancedSolutionsLab1 element
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
AdvancedSolutionsLab1Group('advanced_solutions_lab_1', 'Advanced Solutions Lab1', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

