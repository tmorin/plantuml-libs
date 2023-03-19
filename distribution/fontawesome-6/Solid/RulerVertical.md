# RulerVertical


```text
fontawesome-6/Solid/RulerVertical
```

```text
include('fontawesome-6/Solid/RulerVertical')
```



| Illustration | RulerVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RulerVertical.png) | ![illustration for RulerVertical](../../fontawesome-6/Solid/RulerVertical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RulerVerticalXs>`
- `<$RulerVerticalSm>`
- `<$RulerVerticalMd>`
- `<$RulerVerticalLg>`





## RulerVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RulerVertical
include('fontawesome-6/Solid/RulerVertical')

' renders the element
RulerVertical('RulerVertical', 'Ruler Vertical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RulerVertical
include('fontawesome-6/Solid/RulerVertical')

' renders the element
RulerVertical('RulerVertical', 'Ruler Vertical', 'an optional tech label', 'an optional description')
@enduml
```

