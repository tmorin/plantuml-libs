# MachineLearning


```text
aws-q2-2023/Category/MachineLearning
```

```text
include('aws-q2-2023/Category/MachineLearning')
```



| Illustration | MachineLearning | MachineLearningCard | MachineLearningGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2023/Category/MachineLearning.png) | ![illustration for MachineLearning](../../aws-q2-2023/Category/MachineLearning.Local.png) | ![illustration for MachineLearningCard](../../aws-q2-2023/Category/MachineLearningCard.Local.png) | ![illustration for MachineLearningGroup](../../aws-q2-2023/Category/MachineLearningGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MachineLearningXs>`
- `<$MachineLearningSm>`
- `<$MachineLearningMd>`
- `<$MachineLearningLg>`





## MachineLearning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element MachineLearning
include('aws-q2-2023/Category/MachineLearning')

' renders the element
MachineLearning('MachineLearning', 'Machine Learning', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element MachineLearning
include('aws-q2-2023/Category/MachineLearning')

' renders the element
MachineLearning('MachineLearning', 'Machine Learning', 'an optional tech label', 'an optional description')
@enduml
```

## MachineLearningCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element MachineLearningCard
include('aws-q2-2023/Category/MachineLearning')

' renders the element
MachineLearningCard('MachineLearningCard', 'Machine Learning Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element MachineLearningCard
include('aws-q2-2023/Category/MachineLearning')

' renders the element
MachineLearningCard('MachineLearningCard', 'Machine Learning Card', 'an optional description')
@enduml
```

## MachineLearningGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element MachineLearningGroup
include('aws-q2-2023/Category/MachineLearning')

' renders the element
MachineLearningGroup('MachineLearningGroup', 'Machine Learning Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element MachineLearningGroup
include('aws-q2-2023/Category/MachineLearning')

' renders the element
MachineLearningGroup('MachineLearningGroup', 'Machine Learning Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

