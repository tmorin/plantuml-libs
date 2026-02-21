# SentimentVeryDissatisfied


```text
material/Social/SentimentVeryDissatisfied
```

```text
include('material/Social/SentimentVeryDissatisfied')
```



| Illustration | SentimentVeryDissatisfied |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SentimentVeryDissatisfied.png) | ![illustration for SentimentVeryDissatisfied](../../material/Social/SentimentVeryDissatisfied.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SentimentVeryDissatisfiedXs>`
- `<$SentimentVeryDissatisfiedSm>`
- `<$SentimentVeryDissatisfiedMd>`
- `<$SentimentVeryDissatisfiedLg>`





## SentimentVeryDissatisfied

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SentimentVeryDissatisfied
include('material/Social/SentimentVeryDissatisfied')

' renders the element
SentimentVeryDissatisfied('SentimentVeryDissatisfied', 'Sentiment Very Dissatisfied', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SentimentVeryDissatisfied
include('material/Social/SentimentVeryDissatisfied')

' renders the element
SentimentVeryDissatisfied('SentimentVeryDissatisfied', 'Sentiment Very Dissatisfied', 'an optional tech label', 'an optional description')
@enduml
```

