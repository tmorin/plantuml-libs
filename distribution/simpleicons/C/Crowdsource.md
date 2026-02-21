# Crowdsource


```text
simpleicons/C/Crowdsource
```

```text
include('simpleicons/C/Crowdsource')
```



| Illustration | Crowdsource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Crowdsource.png) | ![illustration for Crowdsource](../../simpleicons/C/Crowdsource.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrowdsourceXs>`
- `<$CrowdsourceSm>`
- `<$CrowdsourceMd>`
- `<$CrowdsourceLg>`





## Crowdsource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Crowdsource
include('simpleicons/C/Crowdsource')

' renders the element
Crowdsource('Crowdsource', 'Crowdsource', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crowdsource
include('simpleicons/C/Crowdsource')

' renders the element
Crowdsource('Crowdsource', 'Crowdsource', 'an optional tech label', 'an optional description')
@enduml
```

