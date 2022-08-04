# MergeType


```text
material-4/Editor/MergeType
```

```text
include('material-4/Editor/MergeType')
```



| Illustration | MergeType |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/MergeType.png) | ![illustration for MergeType](../../material-4/Editor/MergeType.Local.png) |




## MergeType

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MergeType
include('material-4/Editor/MergeType')

' renders the element
MergeType('MergeType', 'Merge Type', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MergeType
include('material-4/Editor/MergeType')

' renders the element
MergeType('MergeType', 'Merge Type', 'an optional tech label', 'an optional description')
@enduml
```

