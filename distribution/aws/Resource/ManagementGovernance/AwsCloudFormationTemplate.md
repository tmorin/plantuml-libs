# AwsCloudFormationTemplate


```text
aws/Resource/ManagementGovernance/AwsCloudFormationTemplate
```

```text
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')
```



| Illustration | AwsCloudFormationTemplate | AwsCloudFormationTemplateCard | AwsCloudFormationTemplateGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/ManagementGovernance/AwsCloudFormationTemplate.png) | ![illustration for AwsCloudFormationTemplate](../../../aws/Resource/ManagementGovernance/AwsCloudFormationTemplate.Local.png) | ![illustration for AwsCloudFormationTemplateCard](../../../aws/Resource/ManagementGovernance/AwsCloudFormationTemplateCard.Local.png) | ![illustration for AwsCloudFormationTemplateGroup](../../../aws/Resource/ManagementGovernance/AwsCloudFormationTemplateGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsCloudFormationTemplateXs>`
- `<$AwsCloudFormationTemplateSm>`
- `<$AwsCloudFormationTemplateMd>`
- `<$AwsCloudFormationTemplateLg>`





## AwsCloudFormationTemplate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudFormationTemplate
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')

' renders the element
AwsCloudFormationTemplate('AwsCloudFormationTemplate', 'Aws Cloud Formation Template', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudFormationTemplate
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')

' renders the element
AwsCloudFormationTemplate('AwsCloudFormationTemplate', 'Aws Cloud Formation Template', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCloudFormationTemplateCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudFormationTemplateCard
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')

' renders the element
AwsCloudFormationTemplateCard('AwsCloudFormationTemplateCard', 'Aws Cloud Formation Template Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudFormationTemplateCard
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')

' renders the element
AwsCloudFormationTemplateCard('AwsCloudFormationTemplateCard', 'Aws Cloud Formation Template Card', 'an optional description')
@enduml
```

## AwsCloudFormationTemplateGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudFormationTemplateGroup
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')

' renders the element
AwsCloudFormationTemplateGroup('AwsCloudFormationTemplateGroup', 'Aws Cloud Formation Template Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudFormationTemplateGroup
include('aws/Resource/ManagementGovernance/AwsCloudFormationTemplate')

' renders the element
AwsCloudFormationTemplateGroup('AwsCloudFormationTemplateGroup', 'Aws Cloud Formation Template Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

