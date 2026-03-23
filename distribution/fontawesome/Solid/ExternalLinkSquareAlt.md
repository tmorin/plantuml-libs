# ExternalLinkSquareAlt


```text
fontawesome/Solid/ExternalLinkSquareAlt
```

```text
include('fontawesome/Solid/ExternalLinkSquareAlt')
```



| Illustration | ExternalLinkSquareAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExternalLinkSquareAlt.png) | ![illustration for ExternalLinkSquareAlt](../../fontawesome/Solid/ExternalLinkSquareAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExternalLinkSquareAltXs>`
- `<$ExternalLinkSquareAltSm>`
- `<$ExternalLinkSquareAltMd>`
- `<$ExternalLinkSquareAltLg>`





## ExternalLinkSquareAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExternalLinkSquareAlt
include('fontawesome/Solid/ExternalLinkSquareAlt')

' renders the element
ExternalLinkSquareAlt('ExternalLinkSquareAlt', 'External Link Square Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExternalLinkSquareAlt
include('fontawesome/Solid/ExternalLinkSquareAlt')

' renders the element
ExternalLinkSquareAlt('ExternalLinkSquareAlt', 'External Link Square Alt', 'an optional tech label', 'an optional description')
@enduml
```

