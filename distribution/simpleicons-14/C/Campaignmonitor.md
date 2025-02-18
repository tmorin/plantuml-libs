# Campaignmonitor


```text
simpleicons-14/C/Campaignmonitor
```

```text
include('simpleicons-14/C/Campaignmonitor')
```



| Illustration | Campaignmonitor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Campaignmonitor.png) | ![illustration for Campaignmonitor](../../simpleicons-14/C/Campaignmonitor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CampaignmonitorXs>`
- `<$CampaignmonitorSm>`
- `<$CampaignmonitorMd>`
- `<$CampaignmonitorLg>`





## Campaignmonitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Campaignmonitor
include('simpleicons-14/C/Campaignmonitor')

' renders the element
Campaignmonitor('Campaignmonitor', 'Campaignmonitor', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Campaignmonitor
include('simpleicons-14/C/Campaignmonitor')

' renders the element
Campaignmonitor('Campaignmonitor', 'Campaignmonitor', 'an optional tech label', 'an optional description')
@enduml
```

