# SentimentVeryDissatisfied


```text
material-4/Social/SentimentVeryDissatisfied
```

```text
include('material-4/Social/SentimentVeryDissatisfied')
```



| Illustration | SentimentVeryDissatisfied |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SentimentVeryDissatisfied.png) | ![illustration for SentimentVeryDissatisfied](../../material-4/Social/SentimentVeryDissatisfied.Local.png) |




## SentimentVeryDissatisfied

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SentimentVeryDissatisfied
include('material-4/Social/SentimentVeryDissatisfied')

' renders the element
SentimentVeryDissatisfied('SentimentVeryDissatisfied', 'Sentiment Very Dissatisfied', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SentimentVeryDissatisfied
include('material-4/Social/SentimentVeryDissatisfied')

' renders the element
SentimentVeryDissatisfied('SentimentVeryDissatisfied', 'Sentiment Very Dissatisfied', 'an optional tech label')
@enduml
```

