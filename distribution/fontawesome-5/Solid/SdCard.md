# SdCard


```text
fontawesome-5/Solid/SdCard
```

```text
include('fontawesome-5/Solid/SdCard')
```



| Illustration | SdCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SdCard.png) | ![illustration for SdCard](../../fontawesome-5/Solid/SdCard.Local.png) |




## SdCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SdCard
include('fontawesome-5/Solid/SdCard')

' renders the element
SdCard('SdCard', 'Sd Card', 'an optional tech label')
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

' loads the Item which embeds the element SdCard
include('fontawesome-5/Solid/SdCard')

' renders the element
SdCard('SdCard', 'Sd Card', 'an optional tech label')
@enduml
```

