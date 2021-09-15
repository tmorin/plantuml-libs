# BusinessApplications


```text
aws-20210730/Category/BusinessApplications
```

```text
include('aws-20210730/Category/BusinessApplications')
```



| Illustration | BusinessApplications | BusinessApplicationsCard | BusinessApplicationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Category/BusinessApplications.png) | ![illustration for BusinessApplications](../../aws-20210730/Category/BusinessApplications.Local.png) | ![illustration for BusinessApplicationsCard](../../aws-20210730/Category/BusinessApplicationsCard.Local.png) | ![illustration for BusinessApplicationsGroup](../../aws-20210730/Category/BusinessApplicationsGroup.Local.png) |




## BusinessApplications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element BusinessApplications
include('aws-20210730/Category/BusinessApplications')

' renders the element
BusinessApplications('BusinessApplications', 'Business Applications', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element BusinessApplications
include('aws-20210730/Category/BusinessApplications')

' renders the element
BusinessApplications('BusinessApplications', 'Business Applications', 'an optional tech label')
@enduml
```

## BusinessApplicationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element BusinessApplicationsCard
include('aws-20210730/Category/BusinessApplications')

' renders the element
BusinessApplicationsCard('BusinessApplicationsCard', 'Business Applications Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element BusinessApplicationsCard
include('aws-20210730/Category/BusinessApplications')

' renders the element
BusinessApplicationsCard('BusinessApplicationsCard', 'Business Applications Card', 'an optional description')
@enduml
```

## BusinessApplicationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element BusinessApplicationsGroup
include('aws-20210730/Category/BusinessApplications')

' renders the element
BusinessApplicationsGroup('BusinessApplicationsGroup', 'Business Applications Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element BusinessApplicationsGroup
include('aws-20210730/Category/BusinessApplications')

' renders the element
BusinessApplicationsGroup('BusinessApplicationsGroup', 'Business Applications Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

