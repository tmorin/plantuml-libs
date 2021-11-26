# SentimentNeutral


```text
material-4/Social/SentimentNeutral
```

```text
include('material-4/Social/SentimentNeutral')
```



| Illustration | SentimentNeutral |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SentimentNeutral.png) | ![illustration for SentimentNeutral](../../material-4/Social/SentimentNeutral.Local.png) |




## SentimentNeutral

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SentimentNeutral
include('material-4/Social/SentimentNeutral')

' renders the element
SentimentNeutral('SentimentNeutral', 'Sentiment Neutral', 'an optional tech label')
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

' loads the Item which embeds the element SentimentNeutral
include('material-4/Social/SentimentNeutral')

' renders the element
SentimentNeutral('SentimentNeutral', 'Sentiment Neutral', 'an optional tech label')
@enduml
```

