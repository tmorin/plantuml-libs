# Chrome


```text
fontawesome/Brands/Chrome
```

```text
include('fontawesome/Brands/Chrome')
```



| Illustration | Chrome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Chrome.png) | ![illustration for Chrome](../../fontawesome/Brands/Chrome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChromeXs>`
- `<$ChromeSm>`
- `<$ChromeMd>`
- `<$ChromeLg>`





## Chrome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Chrome
include('fontawesome/Brands/Chrome')

' renders the element
Chrome('Chrome', 'Chrome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chrome
include('fontawesome/Brands/Chrome')

' renders the element
Chrome('Chrome', 'Chrome', 'an optional tech label', 'an optional description')
@enduml
```

