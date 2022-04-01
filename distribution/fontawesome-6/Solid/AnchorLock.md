# AnchorLock


```text
fontawesome-6/Solid/AnchorLock
```

```text
include('fontawesome-6/Solid/AnchorLock')
```



| Illustration | AnchorLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AnchorLock.png) | ![illustration for AnchorLock](../../fontawesome-6/Solid/AnchorLock.Local.png) |




## AnchorLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnchorLock
include('fontawesome-6/Solid/AnchorLock')

' renders the element
AnchorLock('AnchorLock', 'Anchor Lock', 'an optional tech label')
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

' loads the Item which embeds the element AnchorLock
include('fontawesome-6/Solid/AnchorLock')

' renders the element
AnchorLock('AnchorLock', 'Anchor Lock', 'an optional tech label')
@enduml
```

