# CheckBoxOutlineBlank


```text
material-4/Toggle/CheckBoxOutlineBlank
```

```text
include('material-4/Toggle/CheckBoxOutlineBlank')
```



| Illustration | CheckBoxOutlineBlank |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/CheckBoxOutlineBlank.png) | ![illustration for CheckBoxOutlineBlank](../../material-4/Toggle/CheckBoxOutlineBlank.Local.png) |




## CheckBoxOutlineBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CheckBoxOutlineBlank
include('material-4/Toggle/CheckBoxOutlineBlank')

' renders the element
CheckBoxOutlineBlank('CheckBoxOutlineBlank', 'Check Box Outline Blank', 'an optional tech label')
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

' loads the Item which embeds the element CheckBoxOutlineBlank
include('material-4/Toggle/CheckBoxOutlineBlank')

' renders the element
CheckBoxOutlineBlank('CheckBoxOutlineBlank', 'Check Box Outline Blank', 'an optional tech label')
@enduml
```

