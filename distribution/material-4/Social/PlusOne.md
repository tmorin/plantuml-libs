# PlusOne


```text
material-4/Social/PlusOne
```

```text
include('material-4/Social/PlusOne')
```



| Illustration | PlusOne |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PlusOne.png) | ![illustration for PlusOne](../../material-4/Social/PlusOne.Local.png) |




## PlusOne

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PlusOne
include('material-4/Social/PlusOne')

' renders the element
PlusOne('PlusOne', 'Plus One', 'an optional tech label')
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

' loads the Item which embeds the element PlusOne
include('material-4/Social/PlusOne')

' renders the element
PlusOne('PlusOne', 'Plus One', 'an optional tech label')
@enduml
```

