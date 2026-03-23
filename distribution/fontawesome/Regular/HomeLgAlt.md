# HomeLgAlt


```text
fontawesome/Regular/HomeLgAlt
```

```text
include('fontawesome/Regular/HomeLgAlt')
```



| Illustration | HomeLgAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HomeLgAlt.png) | ![illustration for HomeLgAlt](../../fontawesome/Regular/HomeLgAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeLgAltXs>`
- `<$HomeLgAltSm>`
- `<$HomeLgAltMd>`
- `<$HomeLgAltLg>`





## HomeLgAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HomeLgAlt
include('fontawesome/Regular/HomeLgAlt')

' renders the element
HomeLgAlt('HomeLgAlt', 'Home Lg Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HomeLgAlt
include('fontawesome/Regular/HomeLgAlt')

' renders the element
HomeLgAlt('HomeLgAlt', 'Home Lg Alt', 'an optional tech label', 'an optional description')
@enduml
```

