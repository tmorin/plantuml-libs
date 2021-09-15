# AwsNitroEnclaves


```text
aws-20210730/Architecture/Compute/AwsNitroEnclaves
```

```text
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')
```



| Illustration | AwsNitroEnclaves | AwsNitroEnclavesCard | AwsNitroEnclavesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Compute/AwsNitroEnclaves.png) | ![illustration for AwsNitroEnclaves](../../../aws-20210730/Architecture/Compute/AwsNitroEnclaves.Local.png) | ![illustration for AwsNitroEnclavesCard](../../../aws-20210730/Architecture/Compute/AwsNitroEnclavesCard.Local.png) | ![illustration for AwsNitroEnclavesGroup](../../../aws-20210730/Architecture/Compute/AwsNitroEnclavesGroup.Local.png) |




## AwsNitroEnclaves

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsNitroEnclaves
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')

' renders the element
AwsNitroEnclaves('AwsNitroEnclaves', 'Aws Nitro Enclaves', 'an optional tech label')
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

' loads the Item which embeds the element AwsNitroEnclaves
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')

' renders the element
AwsNitroEnclaves('AwsNitroEnclaves', 'Aws Nitro Enclaves', 'an optional tech label')
@enduml
```

## AwsNitroEnclavesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsNitroEnclavesCard
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')

' renders the element
AwsNitroEnclavesCard('AwsNitroEnclavesCard', 'Aws Nitro Enclaves Card', 'an optional description')
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

' loads the Item which embeds the element AwsNitroEnclavesCard
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')

' renders the element
AwsNitroEnclavesCard('AwsNitroEnclavesCard', 'Aws Nitro Enclaves Card', 'an optional description')
@enduml
```

## AwsNitroEnclavesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsNitroEnclavesGroup
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')

' renders the element
AwsNitroEnclavesGroup('AwsNitroEnclavesGroup', 'Aws Nitro Enclaves Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsNitroEnclavesGroup
include('aws-20210730/Architecture/Compute/AwsNitroEnclaves')

' renders the element
AwsNitroEnclavesGroup('AwsNitroEnclavesGroup', 'Aws Nitro Enclaves Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

