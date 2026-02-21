# Share


```text
fontawesome/Solid/Share
```

```text
include('fontawesome/Solid/Share')
```



| Illustration | Share |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Share.png) | ![illustration for Share](../../fontawesome/Solid/Share.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShareXs>`
- `<$ShareSm>`
- `<$ShareMd>`
- `<$ShareLg>`





## Share

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Share
include('fontawesome/Solid/Share')

' renders the element
Share('Share', 'Share', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Share
include('fontawesome/Solid/Share')

' renders the element
Share('Share', 'Share', 'an optional tech label', 'an optional description')
@enduml
```

