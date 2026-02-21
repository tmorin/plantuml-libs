# Unlock


```text
fontawesome/Solid/Unlock
```

```text
include('fontawesome/Solid/Unlock')
```



| Illustration | Unlock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Unlock.png) | ![illustration for Unlock](../../fontawesome/Solid/Unlock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnlockXs>`
- `<$UnlockSm>`
- `<$UnlockMd>`
- `<$UnlockLg>`





## Unlock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Unlock
include('fontawesome/Solid/Unlock')

' renders the element
Unlock('Unlock', 'Unlock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unlock
include('fontawesome/Solid/Unlock')

' renders the element
Unlock('Unlock', 'Unlock', 'an optional tech label', 'an optional description')
@enduml
```

