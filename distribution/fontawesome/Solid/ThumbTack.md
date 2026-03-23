# ThumbTack


```text
fontawesome/Solid/ThumbTack
```

```text
include('fontawesome/Solid/ThumbTack')
```



| Illustration | ThumbTack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThumbTack.png) | ![illustration for ThumbTack](../../fontawesome/Solid/ThumbTack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbTackXs>`
- `<$ThumbTackSm>`
- `<$ThumbTackMd>`
- `<$ThumbTackLg>`





## ThumbTack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThumbTack
include('fontawesome/Solid/ThumbTack')

' renders the element
ThumbTack('ThumbTack', 'Thumb Tack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbTack
include('fontawesome/Solid/ThumbTack')

' renders the element
ThumbTack('ThumbTack', 'Thumb Tack', 'an optional tech label', 'an optional description')
@enduml
```

