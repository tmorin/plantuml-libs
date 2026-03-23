# GrinSquintTears


```text
fontawesome/Solid/GrinSquintTears
```

```text
include('fontawesome/Solid/GrinSquintTears')
```



| Illustration | GrinSquintTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinSquintTears.png) | ![illustration for GrinSquintTears](../../fontawesome/Solid/GrinSquintTears.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinSquintTearsXs>`
- `<$GrinSquintTearsSm>`
- `<$GrinSquintTearsMd>`
- `<$GrinSquintTearsLg>`





## GrinSquintTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinSquintTears
include('fontawesome/Solid/GrinSquintTears')

' renders the element
GrinSquintTears('GrinSquintTears', 'Grin Squint Tears', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinSquintTears
include('fontawesome/Solid/GrinSquintTears')

' renders the element
GrinSquintTears('GrinSquintTears', 'Grin Squint Tears', 'an optional tech label', 'an optional description')
@enduml
```

