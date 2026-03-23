# GrinHearts


```text
fontawesome/Solid/GrinHearts
```

```text
include('fontawesome/Solid/GrinHearts')
```



| Illustration | GrinHearts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinHearts.png) | ![illustration for GrinHearts](../../fontawesome/Solid/GrinHearts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinHeartsXs>`
- `<$GrinHeartsSm>`
- `<$GrinHeartsMd>`
- `<$GrinHeartsLg>`





## GrinHearts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinHearts
include('fontawesome/Solid/GrinHearts')

' renders the element
GrinHearts('GrinHearts', 'Grin Hearts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinHearts
include('fontawesome/Solid/GrinHearts')

' renders the element
GrinHearts('GrinHearts', 'Grin Hearts', 'an optional tech label', 'an optional description')
@enduml
```

