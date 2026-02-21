# WikipediaW


```text
fontawesome/Brands/WikipediaW
```

```text
include('fontawesome/Brands/WikipediaW')
```



| Illustration | WikipediaW |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/WikipediaW.png) | ![illustration for WikipediaW](../../fontawesome/Brands/WikipediaW.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikipediaWXs>`
- `<$WikipediaWSm>`
- `<$WikipediaWMd>`
- `<$WikipediaWLg>`





## WikipediaW

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WikipediaW
include('fontawesome/Brands/WikipediaW')

' renders the element
WikipediaW('WikipediaW', 'Wikipedia W', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WikipediaW
include('fontawesome/Brands/WikipediaW')

' renders the element
WikipediaW('WikipediaW', 'Wikipedia W', 'an optional tech label', 'an optional description')
@enduml
```

