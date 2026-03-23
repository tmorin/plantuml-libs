# ExternalLink


```text
fontawesome/Solid/ExternalLink
```

```text
include('fontawesome/Solid/ExternalLink')
```



| Illustration | ExternalLink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExternalLink.png) | ![illustration for ExternalLink](../../fontawesome/Solid/ExternalLink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExternalLinkXs>`
- `<$ExternalLinkSm>`
- `<$ExternalLinkMd>`
- `<$ExternalLinkLg>`





## ExternalLink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExternalLink
include('fontawesome/Solid/ExternalLink')

' renders the element
ExternalLink('ExternalLink', 'External Link', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExternalLink
include('fontawesome/Solid/ExternalLink')

' renders the element
ExternalLink('ExternalLink', 'External Link', 'an optional tech label', 'an optional description')
@enduml
```

