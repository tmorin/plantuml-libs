# Folders


```text
aws-q1-2023/Resource/GeneralIcons/Folders
```

```text
include('aws-q1-2023/Resource/GeneralIcons/Folders')
```



| Illustration | Folders | FoldersCard | FoldersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/GeneralIcons/Folders.png) | ![illustration for Folders](../../../aws-q1-2023/Resource/GeneralIcons/Folders.Local.png) | ![illustration for FoldersCard](../../../aws-q1-2023/Resource/GeneralIcons/FoldersCard.Local.png) | ![illustration for FoldersGroup](../../../aws-q1-2023/Resource/GeneralIcons/FoldersGroup.Local.png) |




## Folders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element Folders
include('aws-q1-2023/Resource/GeneralIcons/Folders')

' renders the element
Folders('Folders', 'Folders', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element Folders
include('aws-q1-2023/Resource/GeneralIcons/Folders')

' renders the element
Folders('Folders', 'Folders', 'an optional tech label', 'an optional description')
@enduml
```

## FoldersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element FoldersCard
include('aws-q1-2023/Resource/GeneralIcons/Folders')

' renders the element
FoldersCard('FoldersCard', 'Folders Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element FoldersCard
include('aws-q1-2023/Resource/GeneralIcons/Folders')

' renders the element
FoldersCard('FoldersCard', 'Folders Card', 'an optional description')
@enduml
```

## FoldersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element FoldersGroup
include('aws-q1-2023/Resource/GeneralIcons/Folders')

' renders the element
FoldersGroup('FoldersGroup', 'Folders Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element FoldersGroup
include('aws-q1-2023/Resource/GeneralIcons/Folders')

' renders the element
FoldersGroup('FoldersGroup', 'Folders Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

