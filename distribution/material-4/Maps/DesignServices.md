# DesignServices


```text
material-4/Maps/DesignServices
```

```text
include('material-4/Maps/DesignServices')
```



| Illustration | DesignServices |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DesignServices.png) | ![illustration for DesignServices](../../material-4/Maps/DesignServices.Local.png) |




## DesignServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DesignServices
include('material-4/Maps/DesignServices')

' renders the element
DesignServices('DesignServices', 'Design Services', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DesignServices
include('material-4/Maps/DesignServices')

' renders the element
DesignServices('DesignServices', 'Design Services', 'an optional tech label', 'an optional description')
@enduml
```

