# Serverless


```text
aws/Category/Serverless
```

```text
include('aws/Category/Serverless')
```



| Illustration | Serverless | ServerlessCard | ServerlessGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws/Category/Serverless.png) | ![illustration for Serverless](../../aws/Category/Serverless.Local.png) | ![illustration for ServerlessCard](../../aws/Category/ServerlessCard.Local.png) | ![illustration for ServerlessGroup](../../aws/Category/ServerlessGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServerlessXs>`
- `<$ServerlessSm>`
- `<$ServerlessMd>`
- `<$ServerlessLg>`





## Serverless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element Serverless
include('aws/Category/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Serverless
include('aws/Category/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label', 'an optional description')
@enduml
```

## ServerlessCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element ServerlessCard
include('aws/Category/Serverless')

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
include('aws/bootstrap')

' loads the Item which embeds the element ServerlessCard
include('aws/Category/Serverless')

' renders the element
ServerlessCard('ServerlessCard', 'Serverless Card', 'an optional description')
@enduml
```

## ServerlessGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element ServerlessGroup
include('aws/Category/Serverless')

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
include('aws/bootstrap')

' loads the Item which embeds the element ServerlessGroup
include('aws/Category/Serverless')

' renders the element
ServerlessGroup('ServerlessGroup', 'Serverless Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

