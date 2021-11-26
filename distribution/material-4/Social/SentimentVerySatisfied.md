# SentimentVerySatisfied


```text
material-4/Social/SentimentVerySatisfied
```

```text
include('material-4/Social/SentimentVerySatisfied')
```



| Illustration | SentimentVerySatisfied |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SentimentVerySatisfied.png) | ![illustration for SentimentVerySatisfied](../../material-4/Social/SentimentVerySatisfied.Local.png) |




## SentimentVerySatisfied

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SentimentVerySatisfied
include('material-4/Social/SentimentVerySatisfied')

' renders the element
SentimentVerySatisfied('SentimentVerySatisfied', 'Sentiment Very Satisfied', 'an optional tech label')
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

' loads the Item which embeds the element SentimentVerySatisfied
include('material-4/Social/SentimentVerySatisfied')

' renders the element
SentimentVerySatisfied('SentimentVerySatisfied', 'Sentiment Very Satisfied', 'an optional tech label')
@enduml
```

