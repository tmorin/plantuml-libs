# TrashArrowUp


```text
fontawesome/Solid/TrashArrowUp
```

```text
include('fontawesome/Solid/TrashArrowUp')
```



| Illustration | TrashArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TrashArrowUp.png) | ![illustration for TrashArrowUp](../../fontawesome/Solid/TrashArrowUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrashArrowUpXs>`
- `<$TrashArrowUpSm>`
- `<$TrashArrowUpMd>`
- `<$TrashArrowUpLg>`





## TrashArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TrashArrowUp
include('fontawesome/Solid/TrashArrowUp')

' renders the element
TrashArrowUp('TrashArrowUp', 'Trash Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrashArrowUp
include('fontawesome/Solid/TrashArrowUp')

' renders the element
TrashArrowUp('TrashArrowUp', 'Trash Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

