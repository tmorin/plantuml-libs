# MergeType


```text
material/Editor/MergeType
```

```text
include('material/Editor/MergeType')
```



| Illustration | MergeType |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/MergeType.png) | ![illustration for MergeType](../../material/Editor/MergeType.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MergeTypeXs>`
- `<$MergeTypeSm>`
- `<$MergeTypeMd>`
- `<$MergeTypeLg>`





## MergeType

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MergeType
include('material/Editor/MergeType')

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
include('material/bootstrap')

' loads the Item which embeds the element MergeType
include('material/Editor/MergeType')

' renders the element
MergeType('MergeType', 'Merge Type', 'an optional tech label', 'an optional description')
@enduml
```

