# PhoneMissed


```text
material/Notification/PhoneMissed
```

```text
include('material/Notification/PhoneMissed')
```



| Illustration | PhoneMissed |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PhoneMissed.png) | ![illustration for PhoneMissed](../../material/Notification/PhoneMissed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneMissedXs>`
- `<$PhoneMissedSm>`
- `<$PhoneMissedMd>`
- `<$PhoneMissedLg>`





## PhoneMissed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhoneMissed
include('material/Notification/PhoneMissed')

' renders the element
PhoneMissed('PhoneMissed', 'Phone Missed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneMissed
include('material/Notification/PhoneMissed')

' renders the element
PhoneMissed('PhoneMissed', 'Phone Missed', 'an optional tech label', 'an optional description')
@enduml
```

