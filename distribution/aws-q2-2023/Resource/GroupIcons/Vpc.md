# Vpc


```text
aws-q2-2023/Resource/GroupIcons/Vpc
```

```text
include('aws-q2-2023/Resource/GroupIcons/Vpc')
```



| Illustration | Vpc | VpcCard | VpcGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/GroupIcons/Vpc.png) | ![illustration for Vpc](../../../aws-q2-2023/Resource/GroupIcons/Vpc.Local.png) | ![illustration for VpcCard](../../../aws-q2-2023/Resource/GroupIcons/VpcCard.Local.png) | ![illustration for VpcGroup](../../../aws-q2-2023/Resource/GroupIcons/VpcGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VpcXs>`
- `<$VpcSm>`
- `<$VpcMd>`
- `<$VpcLg>`





## Vpc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element Vpc
include('aws-q2-2023/Resource/GroupIcons/Vpc')

' renders the element
Vpc('Vpc', 'Vpc', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element Vpc
include('aws-q2-2023/Resource/GroupIcons/Vpc')

' renders the element
Vpc('Vpc', 'Vpc', 'an optional tech label', 'an optional description')
@enduml
```

## VpcCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element VpcCard
include('aws-q2-2023/Resource/GroupIcons/Vpc')

' renders the element
VpcCard('VpcCard', 'Vpc Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element VpcCard
include('aws-q2-2023/Resource/GroupIcons/Vpc')

' renders the element
VpcCard('VpcCard', 'Vpc Card', 'an optional description')
@enduml
```

## VpcGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element VpcGroup
include('aws-q2-2023/Resource/GroupIcons/Vpc')

' renders the element
VpcGroup('VpcGroup', 'Vpc Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element VpcGroup
include('aws-q2-2023/Resource/GroupIcons/Vpc')

' renders the element
VpcGroup('VpcGroup', 'Vpc Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

