# SentimentSatisfiedAlt


```text
material/Communication/SentimentSatisfiedAlt
```

```text
include('material/Communication/SentimentSatisfiedAlt')
```



| Illustration | SentimentSatisfiedAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/SentimentSatisfiedAlt.png) | ![illustration for SentimentSatisfiedAlt](../../material/Communication/SentimentSatisfiedAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SentimentSatisfiedAltXs>`
- `<$SentimentSatisfiedAltSm>`
- `<$SentimentSatisfiedAltMd>`
- `<$SentimentSatisfiedAltLg>`





## SentimentSatisfiedAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SentimentSatisfiedAlt
include('material/Communication/SentimentSatisfiedAlt')

' renders the element
SentimentSatisfiedAlt('SentimentSatisfiedAlt', 'Sentiment Satisfied Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SentimentSatisfiedAlt
include('material/Communication/SentimentSatisfiedAlt')

' renders the element
SentimentSatisfiedAlt('SentimentSatisfiedAlt', 'Sentiment Satisfied Alt', 'an optional tech label', 'an optional description')
@enduml
```

