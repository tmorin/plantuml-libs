# MousePointer


```text
fontawesome/Solid/MousePointer
```

```text
include('fontawesome/Solid/MousePointer')
```



| Illustration | MousePointer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MousePointer.png) | ![illustration for MousePointer](../../fontawesome/Solid/MousePointer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MousePointerXs>`
- `<$MousePointerSm>`
- `<$MousePointerMd>`
- `<$MousePointerLg>`





## MousePointer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MousePointer
include('fontawesome/Solid/MousePointer')

' renders the element
MousePointer('MousePointer', 'Mouse Pointer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MousePointer
include('fontawesome/Solid/MousePointer')

' renders the element
MousePointer('MousePointer', 'Mouse Pointer', 'an optional tech label', 'an optional description')
@enduml
```

