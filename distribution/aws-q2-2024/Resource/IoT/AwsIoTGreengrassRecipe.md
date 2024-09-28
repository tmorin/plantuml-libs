# AwsIoTGreengrassRecipe


```text
aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe
```

```text
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')
```



| Illustration | AwsIoTGreengrassRecipe | AwsIoTGreengrassRecipeCard | AwsIoTGreengrassRecipeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe.png) | ![illustration for AwsIoTGreengrassRecipe](../../../aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe.Local.png) | ![illustration for AwsIoTGreengrassRecipeCard](../../../aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipeCard.Local.png) | ![illustration for AwsIoTGreengrassRecipeGroup](../../../aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTGreengrassRecipeXs>`
- `<$AwsIoTGreengrassRecipeSm>`
- `<$AwsIoTGreengrassRecipeMd>`
- `<$AwsIoTGreengrassRecipeLg>`





## AwsIoTGreengrassRecipe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassRecipe
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')

' renders the element
AwsIoTGreengrassRecipe('AwsIoTGreengrassRecipe', 'Aws Io T Greengrass Recipe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTGreengrassRecipe
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')

' renders the element
AwsIoTGreengrassRecipe('AwsIoTGreengrassRecipe', 'Aws Io T Greengrass Recipe', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTGreengrassRecipeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassRecipeCard
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')

' renders the element
AwsIoTGreengrassRecipeCard('AwsIoTGreengrassRecipeCard', 'Aws Io T Greengrass Recipe Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTGreengrassRecipeCard
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')

' renders the element
AwsIoTGreengrassRecipeCard('AwsIoTGreengrassRecipeCard', 'Aws Io T Greengrass Recipe Card', 'an optional description')
@enduml
```

## AwsIoTGreengrassRecipeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassRecipeGroup
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')

' renders the element
AwsIoTGreengrassRecipeGroup('AwsIoTGreengrassRecipeGroup', 'Aws Io T Greengrass Recipe Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTGreengrassRecipeGroup
include('aws-q2-2024/Resource/IoT/AwsIoTGreengrassRecipe')

' renders the element
AwsIoTGreengrassRecipeGroup('AwsIoTGreengrassRecipeGroup', 'Aws Io T Greengrass Recipe Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

