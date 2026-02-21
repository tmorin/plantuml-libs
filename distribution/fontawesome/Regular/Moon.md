# Moon


```text
fontawesome/Regular/Moon
```

```text
include('fontawesome/Regular/Moon')
```



| Illustration | Moon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Moon.png) | ![illustration for Moon](../../fontawesome/Regular/Moon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoonXs>`
- `<$MoonSm>`
- `<$MoonMd>`
- `<$MoonLg>`





## Moon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Moon
include('fontawesome/Regular/Moon')

' renders the element
Moon('Moon', 'Moon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moon
include('fontawesome/Regular/Moon')

' renders the element
Moon('Moon', 'Moon', 'an optional tech label', 'an optional description')
@enduml
```

