# LocationPinLock


```text
fontawesome-6/Solid/LocationPinLock
```

```text
include('fontawesome-6/Solid/LocationPinLock')
```



| Illustration | LocationPinLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LocationPinLock.png) | ![illustration for LocationPinLock](../../fontawesome-6/Solid/LocationPinLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationPinLockXs>`
- `<$LocationPinLockSm>`
- `<$LocationPinLockMd>`
- `<$LocationPinLockLg>`





## LocationPinLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LocationPinLock
include('fontawesome-6/Solid/LocationPinLock')

' renders the element
LocationPinLock('LocationPinLock', 'Location Pin Lock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationPinLock
include('fontawesome-6/Solid/LocationPinLock')

' renders the element
LocationPinLock('LocationPinLock', 'Location Pin Lock', 'an optional tech label', 'an optional description')
@enduml
```

