# HandPaper


```text
fontawesome/Regular/HandPaper
```

```text
include('fontawesome/Regular/HandPaper')
```



| Illustration | HandPaper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandPaper.png) | ![illustration for HandPaper](../../fontawesome/Regular/HandPaper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPaperXs>`
- `<$HandPaperSm>`
- `<$HandPaperMd>`
- `<$HandPaperLg>`





## HandPaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPaper
include('fontawesome/Regular/HandPaper')

' renders the element
HandPaper('HandPaper', 'Hand Paper', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPaper
include('fontawesome/Regular/HandPaper')

' renders the element
HandPaper('HandPaper', 'Hand Paper', 'an optional tech label', 'an optional description')
@enduml
```

