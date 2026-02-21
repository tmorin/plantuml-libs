# Diamond


```text
fontawesome/Solid/Diamond
```

```text
include('fontawesome/Solid/Diamond')
```



| Illustration | Diamond |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Diamond.png) | ![illustration for Diamond](../../fontawesome/Solid/Diamond.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiamondXs>`
- `<$DiamondSm>`
- `<$DiamondMd>`
- `<$DiamondLg>`





## Diamond

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Diamond
include('fontawesome/Solid/Diamond')

' renders the element
Diamond('Diamond', 'Diamond', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Diamond
include('fontawesome/Solid/Diamond')

' renders the element
Diamond('Diamond', 'Diamond', 'an optional tech label', 'an optional description')
@enduml
```

