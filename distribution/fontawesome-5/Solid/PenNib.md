# PenNib


```text
fontawesome-5/Solid/PenNib
```

```text
include('fontawesome-5/Solid/PenNib')
```



| Illustration | PenNib |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PenNib.png) | ![illustration for PenNib](../../fontawesome-5/Solid/PenNib.Local.png) |




## PenNib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PenNib
include('fontawesome-5/Solid/PenNib')

' renders the element
PenNib('PenNib', 'Pen Nib', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PenNib
include('fontawesome-5/Solid/PenNib')

' renders the element
PenNib('PenNib', 'Pen Nib', 'an optional tech label')
@enduml
```

