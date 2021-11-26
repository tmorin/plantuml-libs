# ExternalLinkSquareAlt


```text
fontawesome-5/Solid/ExternalLinkSquareAlt
```

```text
include('fontawesome-5/Solid/ExternalLinkSquareAlt')
```



| Illustration | ExternalLinkSquareAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ExternalLinkSquareAlt.png) | ![illustration for ExternalLinkSquareAlt](../../fontawesome-5/Solid/ExternalLinkSquareAlt.Local.png) |




## ExternalLinkSquareAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ExternalLinkSquareAlt
include('fontawesome-5/Solid/ExternalLinkSquareAlt')

' renders the element
ExternalLinkSquareAlt('ExternalLinkSquareAlt', 'External Link Square Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ExternalLinkSquareAlt
include('fontawesome-5/Solid/ExternalLinkSquareAlt')

' renders the element
ExternalLinkSquareAlt('ExternalLinkSquareAlt', 'External Link Square Alt', 'an optional tech label')
@enduml
```

