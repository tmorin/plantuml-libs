# DesignServices


```text
material/Maps/DesignServices
```

```text
include('material/Maps/DesignServices')
```



| Illustration | DesignServices |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DesignServices.png) | ![illustration for DesignServices](../../material/Maps/DesignServices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesignServicesXs>`
- `<$DesignServicesSm>`
- `<$DesignServicesMd>`
- `<$DesignServicesLg>`





## DesignServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DesignServices
include('material/Maps/DesignServices')

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
include('material/bootstrap')

' loads the Item which embeds the element DesignServices
include('material/Maps/DesignServices')

' renders the element
DesignServices('DesignServices', 'Design Services', 'an optional tech label', 'an optional description')
@enduml
```

