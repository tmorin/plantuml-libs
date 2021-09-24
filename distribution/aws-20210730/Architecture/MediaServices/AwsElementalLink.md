# AwsElementalLink


```text
aws-20210730/Architecture/MediaServices/AwsElementalLink
```

```text
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')
```



| Illustration | AwsElementalLink | AwsElementalLinkCard | AwsElementalLinkGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/MediaServices/AwsElementalLink.png) | ![illustration for AwsElementalLink](../../../aws-20210730/Architecture/MediaServices/AwsElementalLink.Local.png) | ![illustration for AwsElementalLinkCard](../../../aws-20210730/Architecture/MediaServices/AwsElementalLinkCard.Local.png) | ![illustration for AwsElementalLinkGroup](../../../aws-20210730/Architecture/MediaServices/AwsElementalLinkGroup.Local.png) |




## AwsElementalLink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsElementalLink
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')

' renders the element
AwsElementalLink('AwsElementalLink', 'Aws Elemental Link', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsElementalLink
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')

' renders the element
AwsElementalLink('AwsElementalLink', 'Aws Elemental Link', 'an optional tech label')
@enduml
```

## AwsElementalLinkCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsElementalLinkCard
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')

' renders the element
AwsElementalLinkCard('AwsElementalLinkCard', 'Aws Elemental Link Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsElementalLinkCard
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')

' renders the element
AwsElementalLinkCard('AwsElementalLinkCard', 'Aws Elemental Link Card', 'an optional description')
@enduml
```

## AwsElementalLinkGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsElementalLinkGroup
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')

' renders the element
AwsElementalLinkGroup('AwsElementalLinkGroup', 'Aws Elemental Link Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsElementalLinkGroup
include('aws-20210730/Architecture/MediaServices/AwsElementalLink')

' renders the element
AwsElementalLinkGroup('AwsElementalLinkGroup', 'Aws Elemental Link Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
