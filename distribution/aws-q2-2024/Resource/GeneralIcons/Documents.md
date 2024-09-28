# Documents


```text
aws-q2-2024/Resource/GeneralIcons/Documents
```

```text
include('aws-q2-2024/Resource/GeneralIcons/Documents')
```



| Illustration | Documents | DocumentsCard | DocumentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/GeneralIcons/Documents.png) | ![illustration for Documents](../../../aws-q2-2024/Resource/GeneralIcons/Documents.Local.png) | ![illustration for DocumentsCard](../../../aws-q2-2024/Resource/GeneralIcons/DocumentsCard.Local.png) | ![illustration for DocumentsGroup](../../../aws-q2-2024/Resource/GeneralIcons/DocumentsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DocumentsXs>`
- `<$DocumentsSm>`
- `<$DocumentsMd>`
- `<$DocumentsLg>`





## Documents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element Documents
include('aws-q2-2024/Resource/GeneralIcons/Documents')

' renders the element
Documents('Documents', 'Documents', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element Documents
include('aws-q2-2024/Resource/GeneralIcons/Documents')

' renders the element
Documents('Documents', 'Documents', 'an optional tech label', 'an optional description')
@enduml
```

## DocumentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element DocumentsCard
include('aws-q2-2024/Resource/GeneralIcons/Documents')

' renders the element
DocumentsCard('DocumentsCard', 'Documents Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element DocumentsCard
include('aws-q2-2024/Resource/GeneralIcons/Documents')

' renders the element
DocumentsCard('DocumentsCard', 'Documents Card', 'an optional description')
@enduml
```

## DocumentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element DocumentsGroup
include('aws-q2-2024/Resource/GeneralIcons/Documents')

' renders the element
DocumentsGroup('DocumentsGroup', 'Documents Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element DocumentsGroup
include('aws-q2-2024/Resource/GeneralIcons/Documents')

' renders the element
DocumentsGroup('DocumentsGroup', 'Documents Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

