# Aws Nitro Enclaves

```text
aws-20200911/Service/Compute/AwsNitroEnclaves
```

```text
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsNitroEnclaves.png)|![](AwsNitroEnclaves.card.png)|![](AwsNitroEnclaves.element.png)|![](AwsNitroEnclaves.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsNitroEnclaves element
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
AwsNitroEnclavesCard('aws_nitro_enclaves', 'Aws Nitro Enclaves', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsNitroEnclaves element
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
AwsNitroEnclavesCard('aws_nitro_enclaves', 'Aws Nitro Enclaves', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsNitroEnclaves element
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
AwsNitroEnclaves('aws_nitro_enclaves', 'Aws Nitro Enclaves', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsNitroEnclaves element
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
AwsNitroEnclaves('aws_nitro_enclaves', 'Aws Nitro Enclaves', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsNitroEnclaves element
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
AwsNitroEnclavesGroup('aws_nitro_enclaves', 'Aws Nitro Enclaves', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsNitroEnclaves element
include('aws-20200911/Service/Compute/AwsNitroEnclaves')
AwsNitroEnclavesGroup('aws_nitro_enclaves', 'Aws Nitro Enclaves', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

