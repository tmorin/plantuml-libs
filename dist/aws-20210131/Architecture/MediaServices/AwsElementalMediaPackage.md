# Aws Elemental Media Package

```text
aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalMediaPackage.png)|![](AwsElementalMediaPackage.card.png)|![](AwsElementalMediaPackage.element.png)|![](AwsElementalMediaPackage.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalMediaPackage element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
AwsElementalMediaPackageCard('aws_elemental_media_package', 'Aws Elemental Media Package', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalMediaPackage element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
AwsElementalMediaPackageCard('aws_elemental_media_package', 'Aws Elemental Media Package', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalMediaPackage element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
AwsElementalMediaPackage('aws_elemental_media_package', 'Aws Elemental Media Package', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalMediaPackage element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
AwsElementalMediaPackage('aws_elemental_media_package', 'Aws Elemental Media Package', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalMediaPackage element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
AwsElementalMediaPackageGroup('aws_elemental_media_package', 'Aws Elemental Media Package', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalMediaPackage element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaPackage')
AwsElementalMediaPackageGroup('aws_elemental_media_package', 'Aws Elemental Media Package', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

