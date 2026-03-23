# Ad


```text
fontawesome/Solid/Ad
```

```text
include('fontawesome/Solid/Ad')
```



| Illustration | Ad |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ad.png) | ![illustration for Ad](../../fontawesome/Solid/Ad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdXs>`
- `<$AdSm>`
- `<$AdMd>`
- `<$AdLg>`





## Ad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ad
include('fontawesome/Solid/Ad')

' renders the element
Ad('Ad', 'Ad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ad
include('fontawesome/Solid/Ad')

' renders the element
Ad('Ad', 'Ad', 'an optional tech label', 'an optional description')
@enduml
```

