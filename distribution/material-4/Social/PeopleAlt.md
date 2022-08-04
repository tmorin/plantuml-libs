# PeopleAlt


```text
material-4/Social/PeopleAlt
```

```text
include('material-4/Social/PeopleAlt')
```



| Illustration | PeopleAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PeopleAlt.png) | ![illustration for PeopleAlt](../../material-4/Social/PeopleAlt.Local.png) |




## PeopleAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PeopleAlt
include('material-4/Social/PeopleAlt')

' renders the element
PeopleAlt('PeopleAlt', 'People Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleAlt
include('material-4/Social/PeopleAlt')

' renders the element
PeopleAlt('PeopleAlt', 'People Alt', 'an optional tech label', 'an optional description')
@enduml
```

