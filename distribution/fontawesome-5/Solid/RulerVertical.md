# RulerVertical


```text
fontawesome-5/Solid/RulerVertical
```

```text
include('fontawesome-5/Solid/RulerVertical')
```



| Illustration | RulerVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/RulerVertical.png) | ![illustration for RulerVertical](../../fontawesome-5/Solid/RulerVertical.Local.png) |




## RulerVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RulerVertical
include('fontawesome-5/Solid/RulerVertical')

' renders the element
RulerVertical('RulerVertical', 'Ruler Vertical', 'an optional tech label')
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

' loads the Item which embeds the element RulerVertical
include('fontawesome-5/Solid/RulerVertical')

' renders the element
RulerVertical('RulerVertical', 'Ruler Vertical', 'an optional tech label')
@enduml
```

