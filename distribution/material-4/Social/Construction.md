# Construction


```text
material-4/Social/Construction
```

```text
include('material-4/Social/Construction')
```



| Illustration | Construction |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Construction.png) | ![illustration for Construction](../../material-4/Social/Construction.Local.png) |




## Construction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Construction
include('material-4/Social/Construction')

' renders the element
Construction('Construction', 'Construction', 'an optional tech label')
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

' loads the Item which embeds the element Construction
include('material-4/Social/Construction')

' renders the element
Construction('Construction', 'Construction', 'an optional tech label')
@enduml
```

