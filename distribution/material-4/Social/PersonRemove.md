# PersonRemove


```text
material-4/Social/PersonRemove
```

```text
include('material-4/Social/PersonRemove')
```



| Illustration | PersonRemove |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PersonRemove.png) | ![illustration for PersonRemove](../../material-4/Social/PersonRemove.Local.png) |




## PersonRemove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonRemove
include('material-4/Social/PersonRemove')

' renders the element
PersonRemove('PersonRemove', 'Person Remove', 'an optional tech label')
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

' loads the Item which embeds the element PersonRemove
include('material-4/Social/PersonRemove')

' renders the element
PersonRemove('PersonRemove', 'Person Remove', 'an optional tech label')
@enduml
```

