# SaveAlt


```text
material-4/Content/SaveAlt
```

```text
include('material-4/Content/SaveAlt')
```



| Illustration | SaveAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/SaveAlt.png) | ![illustration for SaveAlt](../../material-4/Content/SaveAlt.Local.png) |




## SaveAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SaveAlt
include('material-4/Content/SaveAlt')

' renders the element
SaveAlt('SaveAlt', 'Save Alt', 'an optional tech label')
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

' loads the Item which embeds the element SaveAlt
include('material-4/Content/SaveAlt')

' renders the element
SaveAlt('SaveAlt', 'Save Alt', 'an optional tech label')
@enduml
```

