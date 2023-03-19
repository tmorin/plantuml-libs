# MattressPillow


```text
fontawesome-6/Solid/MattressPillow
```

```text
include('fontawesome-6/Solid/MattressPillow')
```



| Illustration | MattressPillow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MattressPillow.png) | ![illustration for MattressPillow](../../fontawesome-6/Solid/MattressPillow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MattressPillowXs>`
- `<$MattressPillowSm>`
- `<$MattressPillowMd>`
- `<$MattressPillowLg>`





## MattressPillow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MattressPillow
include('fontawesome-6/Solid/MattressPillow')

' renders the element
MattressPillow('MattressPillow', 'Mattress Pillow', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MattressPillow
include('fontawesome-6/Solid/MattressPillow')

' renders the element
MattressPillow('MattressPillow', 'Mattress Pillow', 'an optional tech label', 'an optional description')
@enduml
```

