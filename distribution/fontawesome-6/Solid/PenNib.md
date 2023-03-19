# PenNib


```text
fontawesome-6/Solid/PenNib
```

```text
include('fontawesome-6/Solid/PenNib')
```



| Illustration | PenNib |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PenNib.png) | ![illustration for PenNib](../../fontawesome-6/Solid/PenNib.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenNibXs>`
- `<$PenNibSm>`
- `<$PenNibMd>`
- `<$PenNibLg>`





## PenNib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PenNib
include('fontawesome-6/Solid/PenNib')

' renders the element
PenNib('PenNib', 'Pen Nib', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PenNib
include('fontawesome-6/Solid/PenNib')

' renders the element
PenNib('PenNib', 'Pen Nib', 'an optional tech label', 'an optional description')
@enduml
```

