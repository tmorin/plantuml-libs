# AppStoreIos


```text
fontawesome-6/Brands/AppStoreIos
```

```text
include('fontawesome-6/Brands/AppStoreIos')
```



| Illustration | AppStoreIos |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/AppStoreIos.png) | ![illustration for AppStoreIos](../../fontawesome-6/Brands/AppStoreIos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppStoreIosXs>`
- `<$AppStoreIosSm>`
- `<$AppStoreIosMd>`
- `<$AppStoreIosLg>`





## AppStoreIos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AppStoreIos
include('fontawesome-6/Brands/AppStoreIos')

' renders the element
AppStoreIos('AppStoreIos', 'App Store Ios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AppStoreIos
include('fontawesome-6/Brands/AppStoreIos')

' renders the element
AppStoreIos('AppStoreIos', 'App Store Ios', 'an optional tech label', 'an optional description')
@enduml
```

