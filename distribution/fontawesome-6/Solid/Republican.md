# Republican


```text
fontawesome-6/Solid/Republican
```

```text
include('fontawesome-6/Solid/Republican')
```



| Illustration | Republican |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Republican.png) | ![illustration for Republican](../../fontawesome-6/Solid/Republican.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Republican
include('fontawesome-6/Solid/Republican')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Republican
include('fontawesome-6/Solid/Republican')

' renders the element
Republican('Republican', 'Republican', 'an optional tech label', 'an optional description')
@enduml
```

