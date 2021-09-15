# GroupAwsCloud


```text
aws-20210730/Group/GroupAwsCloud
```

```text
include('aws-20210730/Group/GroupAwsCloud')
```



| Illustration | GroupAwsCloud |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Resource/GroupIcons/AwsCloud.png) | ![illustration for GroupAwsCloud](../../aws-20210730/Group/GroupAwsCloud.Local.png) |




## GroupAwsCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element GroupAwsCloud
include('aws-20210730/Group/GroupAwsCloud')

GroupAwsCloud('GroupAwsCloud', 'Group Aws Cloud', 'an optional tech label') {
  note as note
  the content of the boundary
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

' loads the Item which embeds the element GroupAwsCloud
include('aws-20210730/Group/GroupAwsCloud')

GroupAwsCloud('GroupAwsCloud', 'Group Aws Cloud', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

