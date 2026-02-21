# PhoneLocked


```text
material/Notification/PhoneLocked
```

```text
include('material/Notification/PhoneLocked')
```



| Illustration | PhoneLocked |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PhoneLocked.png) | ![illustration for PhoneLocked](../../material/Notification/PhoneLocked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneLockedXs>`
- `<$PhoneLockedSm>`
- `<$PhoneLockedMd>`
- `<$PhoneLockedLg>`





## PhoneLocked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhoneLocked
include('material/Notification/PhoneLocked')

' renders the element
PhoneLocked('PhoneLocked', 'Phone Locked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneLocked
include('material/Notification/PhoneLocked')

' renders the element
PhoneLocked('PhoneLocked', 'Phone Locked', 'an optional tech label', 'an optional description')
@enduml
```

