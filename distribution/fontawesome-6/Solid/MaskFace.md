# MaskFace


```text
fontawesome-6/Solid/MaskFace
```

```text
include('fontawesome-6/Solid/MaskFace')
```



| Illustration | MaskFace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MaskFace.png) | ![illustration for MaskFace](../../fontawesome-6/Solid/MaskFace.Local.png) |




## MaskFace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MaskFace
include('fontawesome-6/Solid/MaskFace')

' renders the element
MaskFace('MaskFace', 'Mask Face', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MaskFace
include('fontawesome-6/Solid/MaskFace')

' renders the element
MaskFace('MaskFace', 'Mask Face', 'an optional tech label')
@enduml
```

