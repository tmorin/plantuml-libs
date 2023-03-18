# GenericApplication


```text
aws-q1-2023/Resource/GeneralIcons/GenericApplication
```

```text
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')
```



| Illustration | GenericApplication | GenericApplicationCard | GenericApplicationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/GeneralIcons/GenericApplication.png) | ![illustration for GenericApplication](../../../aws-q1-2023/Resource/GeneralIcons/GenericApplication.Local.png) | ![illustration for GenericApplicationCard](../../../aws-q1-2023/Resource/GeneralIcons/GenericApplicationCard.Local.png) | ![illustration for GenericApplicationGroup](../../../aws-q1-2023/Resource/GeneralIcons/GenericApplicationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GenericApplicationXs>`
- `<$GenericApplicationSm>`
- `<$GenericApplicationMd>`
- `<$GenericApplicationLg>`





## GenericApplication

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GenericApplication
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')

' renders the element
GenericApplication('GenericApplication', 'Generic Application', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GenericApplication
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')

' renders the element
GenericApplication('GenericApplication', 'Generic Application', 'an optional tech label', 'an optional description')
@enduml
```

## GenericApplicationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GenericApplicationCard
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')

' renders the element
GenericApplicationCard('GenericApplicationCard', 'Generic Application Card', 'an optional description')
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

' loads the Item which embeds the element GenericApplicationCard
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')

' renders the element
GenericApplicationCard('GenericApplicationCard', 'Generic Application Card', 'an optional description')
@enduml
```

## GenericApplicationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element GenericApplicationGroup
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')

' renders the element
GenericApplicationGroup('GenericApplicationGroup', 'Generic Application Group', 'an optional tech label') {
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

' loads the Item which embeds the element GenericApplicationGroup
include('aws-q1-2023/Resource/GeneralIcons/GenericApplication')

' renders the element
GenericApplicationGroup('GenericApplicationGroup', 'Generic Application Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

