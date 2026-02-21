# SchoolLock


```text
fontawesome/Solid/SchoolLock
```

```text
include('fontawesome/Solid/SchoolLock')
```



| Illustration | SchoolLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SchoolLock.png) | ![illustration for SchoolLock](../../fontawesome/Solid/SchoolLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SchoolLockXs>`
- `<$SchoolLockSm>`
- `<$SchoolLockMd>`
- `<$SchoolLockLg>`





## SchoolLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SchoolLock
include('fontawesome/Solid/SchoolLock')

' renders the element
SchoolLock('SchoolLock', 'School Lock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolLock
include('fontawesome/Solid/SchoolLock')

' renders the element
SchoolLock('SchoolLock', 'School Lock', 'an optional tech label', 'an optional description')
@enduml
```

