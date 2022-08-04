# SentimentSatisfied


```text
material-4/Social/SentimentSatisfied
```

```text
include('material-4/Social/SentimentSatisfied')
```



| Illustration | SentimentSatisfied |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SentimentSatisfied.png) | ![illustration for SentimentSatisfied](../../material-4/Social/SentimentSatisfied.Local.png) |




## SentimentSatisfied

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SentimentSatisfied
include('material-4/Social/SentimentSatisfied')

' renders the element
SentimentSatisfied('SentimentSatisfied', 'Sentiment Satisfied', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SentimentSatisfied
include('material-4/Social/SentimentSatisfied')

' renders the element
SentimentSatisfied('SentimentSatisfied', 'Sentiment Satisfied', 'an optional tech label', 'an optional description')
@enduml
```

