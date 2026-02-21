# FileCircleMinus


```text
fontawesome/Solid/FileCircleMinus
```

```text
include('fontawesome/Solid/FileCircleMinus')
```



| Illustration | FileCircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileCircleMinus.png) | ![illustration for FileCircleMinus](../../fontawesome/Solid/FileCircleMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCircleMinusXs>`
- `<$FileCircleMinusSm>`
- `<$FileCircleMinusMd>`
- `<$FileCircleMinusLg>`





## FileCircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileCircleMinus
include('fontawesome/Solid/FileCircleMinus')

' renders the element
FileCircleMinus('FileCircleMinus', 'File Circle Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCircleMinus
include('fontawesome/Solid/FileCircleMinus')

' renders the element
FileCircleMinus('FileCircleMinus', 'File Circle Minus', 'an optional tech label', 'an optional description')
@enduml
```

