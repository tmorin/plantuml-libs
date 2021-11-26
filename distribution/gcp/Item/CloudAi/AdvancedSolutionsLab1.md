# AdvancedSolutionsLab1


```text
gcp/Item/CloudAi/AdvancedSolutionsLab1
```

```text
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')
```



| Illustration | AdvancedSolutionsLab1 | AdvancedSolutionsLab1Card | AdvancedSolutionsLab1Group |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/CloudAi/AdvancedSolutionsLab1.png) | ![illustration for AdvancedSolutionsLab1](../../../gcp/Item/CloudAi/AdvancedSolutionsLab1.Local.png) | ![illustration for AdvancedSolutionsLab1Card](../../../gcp/Item/CloudAi/AdvancedSolutionsLab1Card.Local.png) | ![illustration for AdvancedSolutionsLab1Group](../../../gcp/Item/CloudAi/AdvancedSolutionsLab1Group.Local.png) |




## AdvancedSolutionsLab1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AdvancedSolutionsLab1
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')

' renders the element
AdvancedSolutionsLab1('AdvancedSolutionsLab1', 'Advanced Solutions Lab1', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AdvancedSolutionsLab1
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')

' renders the element
AdvancedSolutionsLab1('AdvancedSolutionsLab1', 'Advanced Solutions Lab1', 'an optional tech label')
@enduml
```

## AdvancedSolutionsLab1Card

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AdvancedSolutionsLab1Card
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')

' renders the element
AdvancedSolutionsLab1Card('AdvancedSolutionsLab1Card', 'Advanced Solutions Lab1 Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AdvancedSolutionsLab1Card
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')

' renders the element
AdvancedSolutionsLab1Card('AdvancedSolutionsLab1Card', 'Advanced Solutions Lab1 Card', 'an optional description')
@enduml
```

## AdvancedSolutionsLab1Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AdvancedSolutionsLab1Group
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')

' renders the element
AdvancedSolutionsLab1Group('AdvancedSolutionsLab1Group', 'Advanced Solutions Lab1 Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AdvancedSolutionsLab1Group
include('gcp/Item/CloudAi/AdvancedSolutionsLab1')

' renders the element
AdvancedSolutionsLab1Group('AdvancedSolutionsLab1Group', 'Advanced Solutions Lab1 Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

