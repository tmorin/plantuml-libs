# Question


```text
aws-20210730/Resource/GeneralIcons/Question
```

```text
include('aws-20210730/Resource/GeneralIcons/Question')
```



| Illustration | Question | QuestionCard | QuestionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/GeneralIcons/Question.png) | ![illustration for Question](../../../aws-20210730/Resource/GeneralIcons/Question.Local.png) | ![illustration for QuestionCard](../../../aws-20210730/Resource/GeneralIcons/QuestionCard.Local.png) | ![illustration for QuestionGroup](../../../aws-20210730/Resource/GeneralIcons/QuestionGroup.Local.png) |




## Question

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Question
include('aws-20210730/Resource/GeneralIcons/Question')

' renders the element
Question('Question', 'Question', 'an optional tech label')
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

' loads the Item which embeds the element Question
include('aws-20210730/Resource/GeneralIcons/Question')

' renders the element
Question('Question', 'Question', 'an optional tech label')
@enduml
```

## QuestionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element QuestionCard
include('aws-20210730/Resource/GeneralIcons/Question')

' renders the element
QuestionCard('QuestionCard', 'Question Card', 'an optional description')
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

' loads the Item which embeds the element QuestionCard
include('aws-20210730/Resource/GeneralIcons/Question')

' renders the element
QuestionCard('QuestionCard', 'Question Card', 'an optional description')
@enduml
```

## QuestionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element QuestionGroup
include('aws-20210730/Resource/GeneralIcons/Question')

' renders the element
QuestionGroup('QuestionGroup', 'Question Group', 'an optional tech label') {
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

' loads the Item which embeds the element QuestionGroup
include('aws-20210730/Resource/GeneralIcons/Question')

' renders the element
QuestionGroup('QuestionGroup', 'Question Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
