# Serverless


```text
aws-q3-2021/Category/Serverless
```

```text
include('aws-q3-2021/Category/Serverless')
```



| Illustration | Serverless | ServerlessCard | ServerlessGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q3-2021/Category/Serverless.png) | ![illustration for Serverless](../../aws-q3-2021/Category/Serverless.Local.png) | ![illustration for ServerlessCard](../../aws-q3-2021/Category/ServerlessCard.Local.png) | ![illustration for ServerlessGroup](../../aws-q3-2021/Category/ServerlessGroup.Local.png) |




## Serverless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Serverless
include('aws-q3-2021/Category/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Serverless
include('aws-q3-2021/Category/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label')
@enduml
```

## ServerlessCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ServerlessCard
include('aws-q3-2021/Category/Serverless')

' renders the element
ServerlessCard('ServerlessCard', 'Serverless Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ServerlessCard
include('aws-q3-2021/Category/Serverless')

' renders the element
ServerlessCard('ServerlessCard', 'Serverless Card', 'an optional description')
@enduml
```

## ServerlessGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ServerlessGroup
include('aws-q3-2021/Category/Serverless')

' renders the element
ServerlessGroup('ServerlessGroup', 'Serverless Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ServerlessGroup
include('aws-q3-2021/Category/Serverless')

' renders the element
ServerlessGroup('ServerlessGroup', 'Serverless Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

