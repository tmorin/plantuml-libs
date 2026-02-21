# RupeeSign


```text
fontawesome/Solid/RupeeSign
```

```text
include('fontawesome/Solid/RupeeSign')
```



| Illustration | RupeeSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RupeeSign.png) | ![illustration for RupeeSign](../../fontawesome/Solid/RupeeSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RupeeSignXs>`
- `<$RupeeSignSm>`
- `<$RupeeSignMd>`
- `<$RupeeSignLg>`





## RupeeSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RupeeSign
include('fontawesome/Solid/RupeeSign')

' renders the element
RupeeSign('RupeeSign', 'Rupee Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RupeeSign
include('fontawesome/Solid/RupeeSign')

' renders the element
RupeeSign('RupeeSign', 'Rupee Sign', 'an optional tech label', 'an optional description')
@enduml
```

