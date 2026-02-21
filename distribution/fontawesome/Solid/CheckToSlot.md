# CheckToSlot


```text
fontawesome/Solid/CheckToSlot
```

```text
include('fontawesome/Solid/CheckToSlot')
```



| Illustration | CheckToSlot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CheckToSlot.png) | ![illustration for CheckToSlot](../../fontawesome/Solid/CheckToSlot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckToSlotXs>`
- `<$CheckToSlotSm>`
- `<$CheckToSlotMd>`
- `<$CheckToSlotLg>`





## CheckToSlot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CheckToSlot
include('fontawesome/Solid/CheckToSlot')

' renders the element
CheckToSlot('CheckToSlot', 'Check To Slot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CheckToSlot
include('fontawesome/Solid/CheckToSlot')

' renders the element
CheckToSlot('CheckToSlot', 'Check To Slot', 'an optional tech label', 'an optional description')
@enduml
```

