# PhonelinkLock


```text
material/Communication/PhonelinkLock
```

```text
include('material/Communication/PhonelinkLock')
```



| Illustration | PhonelinkLock |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/PhonelinkLock.png) | ![illustration for PhonelinkLock](../../material/Communication/PhonelinkLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhonelinkLockXs>`
- `<$PhonelinkLockSm>`
- `<$PhonelinkLockMd>`
- `<$PhonelinkLockLg>`





## PhonelinkLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhonelinkLock
include('material/Communication/PhonelinkLock')

' renders the element
PhonelinkLock('PhonelinkLock', 'Phonelink Lock', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PhonelinkLock
include('material/Communication/PhonelinkLock')

' renders the element
PhonelinkLock('PhonelinkLock', 'Phonelink Lock', 'an optional tech label', 'an optional description')
@enduml
```

