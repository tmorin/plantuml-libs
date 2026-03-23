# HomeLg


```text
fontawesome/Solid/HomeLg
```

```text
include('fontawesome/Solid/HomeLg')
```



| Illustration | HomeLg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HomeLg.png) | ![illustration for HomeLg](../../fontawesome/Solid/HomeLg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeLgXs>`
- `<$HomeLgSm>`
- `<$HomeLgMd>`
- `<$HomeLgLg>`





## HomeLg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HomeLg
include('fontawesome/Solid/HomeLg')

' renders the element
HomeLg('HomeLg', 'Home Lg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HomeLg
include('fontawesome/Solid/HomeLg')

' renders the element
HomeLg('HomeLg', 'Home Lg', 'an optional tech label', 'an optional description')
@enduml
```

