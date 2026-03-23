# GrinTears


```text
fontawesome/Solid/GrinTears
```

```text
include('fontawesome/Solid/GrinTears')
```



| Illustration | GrinTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinTears.png) | ![illustration for GrinTears](../../fontawesome/Solid/GrinTears.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinTearsXs>`
- `<$GrinTearsSm>`
- `<$GrinTearsMd>`
- `<$GrinTearsLg>`





## GrinTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinTears
include('fontawesome/Solid/GrinTears')

' renders the element
GrinTears('GrinTears', 'Grin Tears', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinTears
include('fontawesome/Solid/GrinTears')

' renders the element
GrinTears('GrinTears', 'Grin Tears', 'an optional tech label', 'an optional description')
@enduml
```

