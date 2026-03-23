# EyeDropperEmpty


```text
fontawesome/Solid/EyeDropperEmpty
```

```text
include('fontawesome/Solid/EyeDropperEmpty')
```



| Illustration | EyeDropperEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EyeDropperEmpty.png) | ![illustration for EyeDropperEmpty](../../fontawesome/Solid/EyeDropperEmpty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EyeDropperEmptyXs>`
- `<$EyeDropperEmptySm>`
- `<$EyeDropperEmptyMd>`
- `<$EyeDropperEmptyLg>`





## EyeDropperEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EyeDropperEmpty
include('fontawesome/Solid/EyeDropperEmpty')

' renders the element
EyeDropperEmpty('EyeDropperEmpty', 'Eye Dropper Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EyeDropperEmpty
include('fontawesome/Solid/EyeDropperEmpty')

' renders the element
EyeDropperEmpty('EyeDropperEmpty', 'Eye Dropper Empty', 'an optional tech label', 'an optional description')
@enduml
```

