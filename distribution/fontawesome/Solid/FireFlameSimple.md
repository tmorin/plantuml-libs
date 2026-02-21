# FireFlameSimple


```text
fontawesome/Solid/FireFlameSimple
```

```text
include('fontawesome/Solid/FireFlameSimple')
```



| Illustration | FireFlameSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FireFlameSimple.png) | ![illustration for FireFlameSimple](../../fontawesome/Solid/FireFlameSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FireFlameSimpleXs>`
- `<$FireFlameSimpleSm>`
- `<$FireFlameSimpleMd>`
- `<$FireFlameSimpleLg>`





## FireFlameSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FireFlameSimple
include('fontawesome/Solid/FireFlameSimple')

' renders the element
FireFlameSimple('FireFlameSimple', 'Fire Flame Simple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FireFlameSimple
include('fontawesome/Solid/FireFlameSimple')

' renders the element
FireFlameSimple('FireFlameSimple', 'Fire Flame Simple', 'an optional tech label', 'an optional description')
@enduml
```

