# FaceRetouchingNatural


```text
material-4/Image/FaceRetouchingNatural
```

```text
include('material-4/Image/FaceRetouchingNatural')
```



| Illustration | FaceRetouchingNatural |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FaceRetouchingNatural.png) | ![illustration for FaceRetouchingNatural](../../material-4/Image/FaceRetouchingNatural.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceRetouchingNaturalXs>`
- `<$FaceRetouchingNaturalSm>`
- `<$FaceRetouchingNaturalMd>`
- `<$FaceRetouchingNaturalLg>`





## FaceRetouchingNatural

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FaceRetouchingNatural
include('material-4/Image/FaceRetouchingNatural')

' renders the element
FaceRetouchingNatural('FaceRetouchingNatural', 'Face Retouching Natural', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element FaceRetouchingNatural
include('material-4/Image/FaceRetouchingNatural')

' renders the element
FaceRetouchingNatural('FaceRetouchingNatural', 'Face Retouching Natural', 'an optional tech label', 'an optional description')
@enduml
```

