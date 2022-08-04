# SportsTennis


```text
material-4/Social/SportsTennis
```

```text
include('material-4/Social/SportsTennis')
```



| Illustration | SportsTennis |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsTennis.png) | ![illustration for SportsTennis](../../material-4/Social/SportsTennis.Local.png) |




## SportsTennis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsTennis
include('material-4/Social/SportsTennis')

' renders the element
SportsTennis('SportsTennis', 'Sports Tennis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsTennis
include('material-4/Social/SportsTennis')

' renders the element
SportsTennis('SportsTennis', 'Sports Tennis', 'an optional tech label', 'an optional description')
@enduml
```

