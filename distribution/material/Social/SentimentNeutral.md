# SentimentNeutral


```text
material/Social/SentimentNeutral
```

```text
include('material/Social/SentimentNeutral')
```



| Illustration | SentimentNeutral |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SentimentNeutral.png) | ![illustration for SentimentNeutral](../../material/Social/SentimentNeutral.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SentimentNeutralXs>`
- `<$SentimentNeutralSm>`
- `<$SentimentNeutralMd>`
- `<$SentimentNeutralLg>`





## SentimentNeutral

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SentimentNeutral
include('material/Social/SentimentNeutral')

' renders the element
SentimentNeutral('SentimentNeutral', 'Sentiment Neutral', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SentimentNeutral
include('material/Social/SentimentNeutral')

' renders the element
SentimentNeutral('SentimentNeutral', 'Sentiment Neutral', 'an optional tech label', 'an optional description')
@enduml
```

