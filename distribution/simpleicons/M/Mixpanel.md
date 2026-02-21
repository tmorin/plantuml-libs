# Mixpanel


```text
simpleicons/M/Mixpanel
```

```text
include('simpleicons/M/Mixpanel')
```



| Illustration | Mixpanel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mixpanel.png) | ![illustration for Mixpanel](../../simpleicons/M/Mixpanel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MixpanelXs>`
- `<$MixpanelSm>`
- `<$MixpanelMd>`
- `<$MixpanelLg>`





## Mixpanel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mixpanel
include('simpleicons/M/Mixpanel')

' renders the element
Mixpanel('Mixpanel', 'Mixpanel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mixpanel
include('simpleicons/M/Mixpanel')

' renders the element
Mixpanel('Mixpanel', 'Mixpanel', 'an optional tech label', 'an optional description')
@enduml
```

