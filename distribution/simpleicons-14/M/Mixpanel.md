# Mixpanel


```text
simpleicons-14/M/Mixpanel
```

```text
include('simpleicons-14/M/Mixpanel')
```



| Illustration | Mixpanel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mixpanel.png) | ![illustration for Mixpanel](../../simpleicons-14/M/Mixpanel.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mixpanel
include('simpleicons-14/M/Mixpanel')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mixpanel
include('simpleicons-14/M/Mixpanel')

' renders the element
Mixpanel('Mixpanel', 'Mixpanel', 'an optional tech label', 'an optional description')
@enduml
```

