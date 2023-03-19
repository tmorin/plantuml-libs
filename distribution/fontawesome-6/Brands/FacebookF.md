# FacebookF


```text
fontawesome-6/Brands/FacebookF
```

```text
include('fontawesome-6/Brands/FacebookF')
```



| Illustration | FacebookF |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FacebookF.png) | ![illustration for FacebookF](../../fontawesome-6/Brands/FacebookF.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FacebookFXs>`
- `<$FacebookFSm>`
- `<$FacebookFMd>`
- `<$FacebookFLg>`





## FacebookF

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FacebookF
include('fontawesome-6/Brands/FacebookF')

' renders the element
FacebookF('FacebookF', 'Facebook F', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FacebookF
include('fontawesome-6/Brands/FacebookF')

' renders the element
FacebookF('FacebookF', 'Facebook F', 'an optional tech label', 'an optional description')
@enduml
```

