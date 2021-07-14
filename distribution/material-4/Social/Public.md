# Public


```text
material-4/Social/Public
```

```text
include('material-4/Social/Public')
```



| Illustration | Public |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Public.png) | ![illustration for Public](../../material-4/Social/Public.Local.png) |




## Public

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Public
include('material-4/Social/Public')

' renders the element
Public('Public', 'Public', 'an optional tech label')
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

' loads the Item which embeds the element Public
include('material-4/Social/Public')

' renders the element
Public('Public', 'Public', 'an optional tech label')
@enduml
```

