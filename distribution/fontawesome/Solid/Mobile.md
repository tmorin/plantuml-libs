# Mobile


```text
fontawesome/Solid/Mobile
```

```text
include('fontawesome/Solid/Mobile')
```



| Illustration | Mobile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Mobile.png) | ![illustration for Mobile](../../fontawesome/Solid/Mobile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileXs>`
- `<$MobileSm>`
- `<$MobileMd>`
- `<$MobileLg>`





## Mobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mobile
include('fontawesome/Solid/Mobile')

' renders the element
Mobile('Mobile', 'Mobile', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mobile
include('fontawesome/Solid/Mobile')

' renders the element
Mobile('Mobile', 'Mobile', 'an optional tech label', 'an optional description')
@enduml
```

