# Republican


```text
fontawesome/Solid/Republican
```

```text
include('fontawesome/Solid/Republican')
```



| Illustration | Republican |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Republican.png) | ![illustration for Republican](../../fontawesome/Solid/Republican.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RepublicanXs>`
- `<$RepublicanSm>`
- `<$RepublicanMd>`
- `<$RepublicanLg>`





## Republican

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Republican
include('fontawesome/Solid/Republican')

' renders the element
Republican('Republican', 'Republican', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Republican
include('fontawesome/Solid/Republican')

' renders the element
Republican('Republican', 'Republican', 'an optional tech label', 'an optional description')
@enduml
```

