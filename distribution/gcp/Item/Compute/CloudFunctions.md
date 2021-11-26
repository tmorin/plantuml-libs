# CloudFunctions


```text
gcp/Item/Compute/CloudFunctions
```

```text
include('gcp/Item/Compute/CloudFunctions')
```



| Illustration | CloudFunctions | CloudFunctionsCard | CloudFunctionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/Compute/CloudFunctions.png) | ![illustration for CloudFunctions](../../../gcp/Item/Compute/CloudFunctions.Local.png) | ![illustration for CloudFunctionsCard](../../../gcp/Item/Compute/CloudFunctionsCard.Local.png) | ![illustration for CloudFunctionsGroup](../../../gcp/Item/Compute/CloudFunctionsGroup.Local.png) |




## CloudFunctions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudFunctions
include('gcp/Item/Compute/CloudFunctions')

' renders the element
CloudFunctions('CloudFunctions', 'Cloud Functions', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudFunctions
include('gcp/Item/Compute/CloudFunctions')

' renders the element
CloudFunctions('CloudFunctions', 'Cloud Functions', 'an optional tech label')
@enduml
```

## CloudFunctionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudFunctionsCard
include('gcp/Item/Compute/CloudFunctions')

' renders the element
CloudFunctionsCard('CloudFunctionsCard', 'Cloud Functions Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudFunctionsCard
include('gcp/Item/Compute/CloudFunctions')

' renders the element
CloudFunctionsCard('CloudFunctionsCard', 'Cloud Functions Card', 'an optional description')
@enduml
```

## CloudFunctionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudFunctionsGroup
include('gcp/Item/Compute/CloudFunctions')

' renders the element
CloudFunctionsGroup('CloudFunctionsGroup', 'Cloud Functions Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudFunctionsGroup
include('gcp/Item/Compute/CloudFunctions')

' renders the element
CloudFunctionsGroup('CloudFunctionsGroup', 'Cloud Functions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

