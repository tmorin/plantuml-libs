# PersonAddAlt


```text
material-4/Social/PersonAddAlt
```

```text
include('material-4/Social/PersonAddAlt')
```



| Illustration | PersonAddAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PersonAddAlt.png) | ![illustration for PersonAddAlt](../../material-4/Social/PersonAddAlt.Local.png) |




## PersonAddAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonAddAlt
include('material-4/Social/PersonAddAlt')

' renders the element
PersonAddAlt('PersonAddAlt', 'Person Add Alt', 'an optional tech label')
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

' loads the Item which embeds the element PersonAddAlt
include('material-4/Social/PersonAddAlt')

' renders the element
PersonAddAlt('PersonAddAlt', 'Person Add Alt', 'an optional tech label')
@enduml
```

