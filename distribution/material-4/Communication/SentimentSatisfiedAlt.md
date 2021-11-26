# SentimentSatisfiedAlt


```text
material-4/Communication/SentimentSatisfiedAlt
```

```text
include('material-4/Communication/SentimentSatisfiedAlt')
```



| Illustration | SentimentSatisfiedAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/SentimentSatisfiedAlt.png) | ![illustration for SentimentSatisfiedAlt](../../material-4/Communication/SentimentSatisfiedAlt.Local.png) |




## SentimentSatisfiedAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SentimentSatisfiedAlt
include('material-4/Communication/SentimentSatisfiedAlt')

' renders the element
SentimentSatisfiedAlt('SentimentSatisfiedAlt', 'Sentiment Satisfied Alt', 'an optional tech label')
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

' loads the Item which embeds the element SentimentSatisfiedAlt
include('material-4/Communication/SentimentSatisfiedAlt')

' renders the element
SentimentSatisfiedAlt('SentimentSatisfiedAlt', 'Sentiment Satisfied Alt', 'an optional tech label')
@enduml
```

