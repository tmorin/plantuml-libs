# IosShare


```text
material-4/Social/IosShare
```

```text
include('material-4/Social/IosShare')
```



| Illustration | IosShare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/IosShare.png) | ![illustration for IosShare](../../material-4/Social/IosShare.Local.png) |




## IosShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element IosShare
include('material-4/Social/IosShare')

' renders the element
IosShare('IosShare', 'Ios Share', 'an optional tech label')
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

' loads the Item which embeds the element IosShare
include('material-4/Social/IosShare')

' renders the element
IosShare('IosShare', 'Ios Share', 'an optional tech label')
@enduml
```

