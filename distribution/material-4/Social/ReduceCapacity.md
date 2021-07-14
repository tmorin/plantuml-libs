# ReduceCapacity


```text
material-4/Social/ReduceCapacity
```

```text
include('material-4/Social/ReduceCapacity')
```



| Illustration | ReduceCapacity |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/ReduceCapacity.png) | ![illustration for ReduceCapacity](../../material-4/Social/ReduceCapacity.Local.png) |




## ReduceCapacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ReduceCapacity
include('material-4/Social/ReduceCapacity')

' renders the element
ReduceCapacity('ReduceCapacity', 'Reduce Capacity', 'an optional tech label')
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

' loads the Item which embeds the element ReduceCapacity
include('material-4/Social/ReduceCapacity')

' renders the element
ReduceCapacity('ReduceCapacity', 'Reduce Capacity', 'an optional tech label')
@enduml
```

