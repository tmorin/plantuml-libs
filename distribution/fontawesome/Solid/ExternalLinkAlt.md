# ExternalLinkAlt


```text
fontawesome/Solid/ExternalLinkAlt
```

```text
include('fontawesome/Solid/ExternalLinkAlt')
```



| Illustration | ExternalLinkAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExternalLinkAlt.png) | ![illustration for ExternalLinkAlt](../../fontawesome/Solid/ExternalLinkAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExternalLinkAltXs>`
- `<$ExternalLinkAltSm>`
- `<$ExternalLinkAltMd>`
- `<$ExternalLinkAltLg>`





## ExternalLinkAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExternalLinkAlt
include('fontawesome/Solid/ExternalLinkAlt')

' renders the element
ExternalLinkAlt('ExternalLinkAlt', 'External Link Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExternalLinkAlt
include('fontawesome/Solid/ExternalLinkAlt')

' renders the element
ExternalLinkAlt('ExternalLinkAlt', 'External Link Alt', 'an optional tech label', 'an optional description')
@enduml
```

