# GroupAwsCloud


```text
aws/Group/GroupAwsCloud
```

```text
include('aws/Group/GroupAwsCloud')
```



| Illustration | GroupAwsCloud |
| :---: | :---: |
| ![illustration for Illustration](../../aws/Resource/GroupIcons/AwsCloud.png) | ![illustration for GroupAwsCloud](../../aws/Group/GroupAwsCloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupAwsCloudXs>`
- `<$GroupAwsCloudSm>`
- `<$GroupAwsCloudMd>`
- `<$GroupAwsCloudLg>`





## GroupAwsCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element GroupAwsCloud
include('aws/Group/GroupAwsCloud')

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
include('aws/bootstrap')

' loads the Item which embeds the element GroupAwsCloud
include('aws/Group/GroupAwsCloud')

GroupAwsCloud('GroupAwsCloud', 'Group Aws Cloud', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

