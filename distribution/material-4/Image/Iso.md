# Iso


```text
material-4/Image/Iso
```

```text
include('material-4/Image/Iso')
```



| Illustration | Iso |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Iso.png) | ![illustration for Iso](../../material-4/Image/Iso.Local.png) |




## Iso

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Iso
include('material-4/Image/Iso')

' renders the element
Iso('Iso', 'Iso', 'an optional tech label')
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

' loads the Item which embeds the element Iso
include('material-4/Image/Iso')

' renders the element
Iso('Iso', 'Iso', 'an optional tech label')
@enduml
```

