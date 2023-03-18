# ServerContents


```text
aws-q1-2023/Resource/GroupIcons/ServerContents
```

```text
include('aws-q1-2023/Resource/GroupIcons/ServerContents')
```



| Illustration | ServerContents | ServerContentsCard | ServerContentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/GroupIcons/ServerContents.png) | ![illustration for ServerContents](../../../aws-q1-2023/Resource/GroupIcons/ServerContents.Local.png) | ![illustration for ServerContentsCard](../../../aws-q1-2023/Resource/GroupIcons/ServerContentsCard.Local.png) | ![illustration for ServerContentsGroup](../../../aws-q1-2023/Resource/GroupIcons/ServerContentsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServerContentsXs>`
- `<$ServerContentsSm>`
- `<$ServerContentsMd>`
- `<$ServerContentsLg>`





## ServerContents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServerContents
include('aws-q1-2023/Resource/GroupIcons/ServerContents')

' renders the element
ServerContents('ServerContents', 'Server Contents', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServerContents
include('aws-q1-2023/Resource/GroupIcons/ServerContents')

' renders the element
ServerContents('ServerContents', 'Server Contents', 'an optional tech label', 'an optional description')
@enduml
```

## ServerContentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServerContentsCard
include('aws-q1-2023/Resource/GroupIcons/ServerContents')

' renders the element
ServerContentsCard('ServerContentsCard', 'Server Contents Card', 'an optional description')
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

' loads the Item which embeds the element ServerContentsCard
include('aws-q1-2023/Resource/GroupIcons/ServerContents')

' renders the element
ServerContentsCard('ServerContentsCard', 'Server Contents Card', 'an optional description')
@enduml
```

## ServerContentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServerContentsGroup
include('aws-q1-2023/Resource/GroupIcons/ServerContents')

' renders the element
ServerContentsGroup('ServerContentsGroup', 'Server Contents Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServerContentsGroup
include('aws-q1-2023/Resource/GroupIcons/ServerContents')

' renders the element
ServerContentsGroup('ServerContentsGroup', 'Server Contents Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

