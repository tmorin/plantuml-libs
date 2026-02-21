# QuoteLeft


```text
fontawesome/Solid/QuoteLeft
```

```text
include('fontawesome/Solid/QuoteLeft')
```



| Illustration | QuoteLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/QuoteLeft.png) | ![illustration for QuoteLeft](../../fontawesome/Solid/QuoteLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuoteLeftXs>`
- `<$QuoteLeftSm>`
- `<$QuoteLeftMd>`
- `<$QuoteLeftLg>`





## QuoteLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element QuoteLeft
include('fontawesome/Solid/QuoteLeft')

' renders the element
QuoteLeft('QuoteLeft', 'Quote Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QuoteLeft
include('fontawesome/Solid/QuoteLeft')

' renders the element
QuoteLeft('QuoteLeft', 'Quote Left', 'an optional tech label', 'an optional description')
@enduml
```

