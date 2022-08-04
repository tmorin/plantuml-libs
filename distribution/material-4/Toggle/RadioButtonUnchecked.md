# RadioButtonUnchecked


```text
material-4/Toggle/RadioButtonUnchecked
```

```text
include('material-4/Toggle/RadioButtonUnchecked')
```



| Illustration | RadioButtonUnchecked |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/RadioButtonUnchecked.png) | ![illustration for RadioButtonUnchecked](../../material-4/Toggle/RadioButtonUnchecked.Local.png) |




## RadioButtonUnchecked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RadioButtonUnchecked
include('material-4/Toggle/RadioButtonUnchecked')

' renders the element
RadioButtonUnchecked('RadioButtonUnchecked', 'Radio Button Unchecked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RadioButtonUnchecked
include('material-4/Toggle/RadioButtonUnchecked')

' renders the element
RadioButtonUnchecked('RadioButtonUnchecked', 'Radio Button Unchecked', 'an optional tech label', 'an optional description')
@enduml
```

