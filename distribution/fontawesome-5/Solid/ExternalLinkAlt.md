# ExternalLinkAlt


```text
fontawesome-5/Solid/ExternalLinkAlt
```

```text
include('fontawesome-5/Solid/ExternalLinkAlt')
```



| Illustration | ExternalLinkAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ExternalLinkAlt.png) | ![illustration for ExternalLinkAlt](../../fontawesome-5/Solid/ExternalLinkAlt.Local.png) |




## ExternalLinkAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ExternalLinkAlt
include('fontawesome-5/Solid/ExternalLinkAlt')

' renders the element
ExternalLinkAlt('ExternalLinkAlt', 'External Link Alt', 'an optional tech label')
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

' loads the Item which embeds the element ExternalLinkAlt
include('fontawesome-5/Solid/ExternalLinkAlt')

' renders the element
ExternalLinkAlt('ExternalLinkAlt', 'External Link Alt', 'an optional tech label')
@enduml
```

