# Campaignmonitor


```text
simpleicons/C/Campaignmonitor
```

```text
include('simpleicons/C/Campaignmonitor')
```



| Illustration | Campaignmonitor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Campaignmonitor.png) | ![illustration for Campaignmonitor](../../simpleicons/C/Campaignmonitor.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Campaignmonitor
include('simpleicons/C/Campaignmonitor')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Campaignmonitor
include('simpleicons/C/Campaignmonitor')

' renders the element
Campaignmonitor('Campaignmonitor', 'Campaignmonitor', 'an optional tech label', 'an optional description')
@enduml
```

