# HouseLock


```text
fontawesome/Solid/HouseLock
```

```text
include('fontawesome/Solid/HouseLock')
```



| Illustration | HouseLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseLock.png) | ![illustration for HouseLock](../../fontawesome/Solid/HouseLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseLockXs>`
- `<$HouseLockSm>`
- `<$HouseLockMd>`
- `<$HouseLockLg>`





## HouseLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseLock
include('fontawesome/Solid/HouseLock')

' renders the element
HouseLock('HouseLock', 'House Lock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseLock
include('fontawesome/Solid/HouseLock')

' renders the element
HouseLock('HouseLock', 'House Lock', 'an optional tech label', 'an optional description')
@enduml
```

