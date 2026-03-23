# Eyedropper


```text
fontawesome/Solid/Eyedropper
```

```text
include('fontawesome/Solid/Eyedropper')
```



| Illustration | Eyedropper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Eyedropper.png) | ![illustration for Eyedropper](../../fontawesome/Solid/Eyedropper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EyedropperXs>`
- `<$EyedropperSm>`
- `<$EyedropperMd>`
- `<$EyedropperLg>`





## Eyedropper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Eyedropper
include('fontawesome/Solid/Eyedropper')

' renders the element
Eyedropper('Eyedropper', 'Eyedropper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eyedropper
include('fontawesome/Solid/Eyedropper')

' renders the element
Eyedropper('Eyedropper', 'Eyedropper', 'an optional tech label', 'an optional description')
@enduml
```

