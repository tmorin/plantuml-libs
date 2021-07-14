# CloudBuild


```text
gcp/Item/DeveloperTools/CloudBuild
```

```text
include('gcp/Item/DeveloperTools/CloudBuild')
```



| Illustration | CloudBuild | CloudBuildCard | CloudBuildGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/DeveloperTools/CloudBuild.png) | ![illustration for CloudBuild](../../../gcp/Item/DeveloperTools/CloudBuild.Local.png) | ![illustration for CloudBuildCard](../../../gcp/Item/DeveloperTools/CloudBuildCard.Local.png) | ![illustration for CloudBuildGroup](../../../gcp/Item/DeveloperTools/CloudBuildGroup.Local.png) |




## CloudBuild

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudBuild
include('gcp/Item/DeveloperTools/CloudBuild')

' renders the element
CloudBuild('CloudBuild', 'Cloud Build', 'an optional tech label')
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

' loads the Item which embeds the element CloudBuild
include('gcp/Item/DeveloperTools/CloudBuild')

' renders the element
CloudBuild('CloudBuild', 'Cloud Build', 'an optional tech label')
@enduml
```

## CloudBuildCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudBuildCard
include('gcp/Item/DeveloperTools/CloudBuild')

' renders the element
CloudBuildCard('CloudBuildCard', 'Cloud Build Card', 'an optional description')
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

' loads the Item which embeds the element CloudBuildCard
include('gcp/Item/DeveloperTools/CloudBuild')

' renders the element
CloudBuildCard('CloudBuildCard', 'Cloud Build Card', 'an optional description')
@enduml
```

## CloudBuildGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudBuildGroup
include('gcp/Item/DeveloperTools/CloudBuild')

' renders the element
CloudBuildGroup('CloudBuildGroup', 'Cloud Build Group', 'an optional tech label') {
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

' loads the Item which embeds the element CloudBuildGroup
include('gcp/Item/DeveloperTools/CloudBuild')

' renders the element
CloudBuildGroup('CloudBuildGroup', 'Cloud Build Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

