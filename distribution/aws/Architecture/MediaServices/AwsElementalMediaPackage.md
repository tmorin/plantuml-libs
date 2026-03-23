# AwsElementalMediaPackage


```text
aws/Architecture/MediaServices/AwsElementalMediaPackage
```

```text
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')
```



| Illustration | AwsElementalMediaPackage | AwsElementalMediaPackageCard | AwsElementalMediaPackageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/MediaServices/AwsElementalMediaPackage.png) | ![illustration for AwsElementalMediaPackage](../../../aws/Architecture/MediaServices/AwsElementalMediaPackage.Local.png) | ![illustration for AwsElementalMediaPackageCard](../../../aws/Architecture/MediaServices/AwsElementalMediaPackageCard.Local.png) | ![illustration for AwsElementalMediaPackageGroup](../../../aws/Architecture/MediaServices/AwsElementalMediaPackageGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsElementalMediaPackageXs>`
- `<$AwsElementalMediaPackageSm>`
- `<$AwsElementalMediaPackageMd>`
- `<$AwsElementalMediaPackageLg>`





## AwsElementalMediaPackage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsElementalMediaPackage
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')

' renders the element
AwsElementalMediaPackage('AwsElementalMediaPackage', 'Aws Elemental Media Package', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaPackage
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')

' renders the element
AwsElementalMediaPackage('AwsElementalMediaPackage', 'Aws Elemental Media Package', 'an optional tech label', 'an optional description')
@enduml
```

## AwsElementalMediaPackageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsElementalMediaPackageCard
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')

' renders the element
AwsElementalMediaPackageCard('AwsElementalMediaPackageCard', 'Aws Elemental Media Package Card', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaPackageCard
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')

' renders the element
AwsElementalMediaPackageCard('AwsElementalMediaPackageCard', 'Aws Elemental Media Package Card', 'an optional description')
@enduml
```

## AwsElementalMediaPackageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsElementalMediaPackageGroup
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')

' renders the element
AwsElementalMediaPackageGroup('AwsElementalMediaPackageGroup', 'Aws Elemental Media Package Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsElementalMediaPackageGroup
include('aws/Architecture/MediaServices/AwsElementalMediaPackage')

' renders the element
AwsElementalMediaPackageGroup('AwsElementalMediaPackageGroup', 'Aws Elemental Media Package Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

