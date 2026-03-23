# SingleQuoteLeft


```text
fontawesome/Solid/SingleQuoteLeft
```

```text
include('fontawesome/Solid/SingleQuoteLeft')
```



| Illustration | SingleQuoteLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SingleQuoteLeft.png) | ![illustration for SingleQuoteLeft](../../fontawesome/Solid/SingleQuoteLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SingleQuoteLeftXs>`
- `<$SingleQuoteLeftSm>`
- `<$SingleQuoteLeftMd>`
- `<$SingleQuoteLeftLg>`





## SingleQuoteLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SingleQuoteLeft
include('fontawesome/Solid/SingleQuoteLeft')

' renders the element
SingleQuoteLeft('SingleQuoteLeft', 'Single Quote Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SingleQuoteLeft
include('fontawesome/Solid/SingleQuoteLeft')

' renders the element
SingleQuoteLeft('SingleQuoteLeft', 'Single Quote Left', 'an optional tech label', 'an optional description')
@enduml
```

