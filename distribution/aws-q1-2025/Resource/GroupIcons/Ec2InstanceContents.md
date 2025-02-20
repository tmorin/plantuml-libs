# Ec2InstanceContents


```text
aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents
```

```text
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')
```



| Illustration | Ec2InstanceContents | Ec2InstanceContentsCard | Ec2InstanceContentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents.png) | ![illustration for Ec2InstanceContents](../../../aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents.Local.png) | ![illustration for Ec2InstanceContentsCard](../../../aws-q1-2025/Resource/GroupIcons/Ec2InstanceContentsCard.Local.png) | ![illustration for Ec2InstanceContentsGroup](../../../aws-q1-2025/Resource/GroupIcons/Ec2InstanceContentsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Ec2InstanceContentsXs>`
- `<$Ec2InstanceContentsSm>`
- `<$Ec2InstanceContentsMd>`
- `<$Ec2InstanceContentsLg>`





## Ec2InstanceContents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element Ec2InstanceContents
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')

' renders the element
Ec2InstanceContents('Ec2InstanceContents', 'Ec2 Instance Contents', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element Ec2InstanceContents
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')

' renders the element
Ec2InstanceContents('Ec2InstanceContents', 'Ec2 Instance Contents', 'an optional tech label', 'an optional description')
@enduml
```

## Ec2InstanceContentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element Ec2InstanceContentsCard
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')

' renders the element
Ec2InstanceContentsCard('Ec2InstanceContentsCard', 'Ec2 Instance Contents Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element Ec2InstanceContentsCard
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')

' renders the element
Ec2InstanceContentsCard('Ec2InstanceContentsCard', 'Ec2 Instance Contents Card', 'an optional description')
@enduml
```

## Ec2InstanceContentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element Ec2InstanceContentsGroup
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')

' renders the element
Ec2InstanceContentsGroup('Ec2InstanceContentsGroup', 'Ec2 Instance Contents Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element Ec2InstanceContentsGroup
include('aws-q1-2025/Resource/GroupIcons/Ec2InstanceContents')

' renders the element
Ec2InstanceContentsGroup('Ec2InstanceContentsGroup', 'Ec2 Instance Contents Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

