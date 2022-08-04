# SingleBed


```text
material-4/Social/SingleBed
```

```text
include('material-4/Social/SingleBed')
```



| Illustration | SingleBed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SingleBed.png) | ![illustration for SingleBed](../../material-4/Social/SingleBed.Local.png) |




## SingleBed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SingleBed
include('material-4/Social/SingleBed')

' renders the element
SingleBed('SingleBed', 'Single Bed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SingleBed
include('material-4/Social/SingleBed')

' renders the element
SingleBed('SingleBed', 'Single Bed', 'an optional tech label', 'an optional description')
@enduml
```

